const { Message, User, Chat } = require('../models');

module.exports = {

  async getSingleChat(req, res) {
    const username = req.body;

  const chat = await User.findOne(username)
    .select('_id')
    .then((userId) => {
      if (!userId) {
        console.log("UserId param not sent with request");
        return res.sendStatus(400);
      }
      Chat.find(
          { users: userId }
      )
      .populate("users", "-password")
      .populate("latestMessage")
      .then((chatData) => {
        
        if (!chatData){
          res.status(404).json({ message: "No chat found."});
          return;
        }
        User.populate(chatData, {
          path: "latestMessage.sender",
          select: "name pic email",
        })
        .then((senderData)=> {
          
          if (!senderData){
            res.status(404).json({ message: "No chat found from sender."});
            return;
          }
          else if (senderData.length > 0) {
            res.send(senderData[0]);
          } else {
            const newChat = {
              chatName: "sender",
              users: [userId],
            }
          } 
         
          Chat.create(chat)
          .then((newChatData) => {

                  if (!newChatData){
                    res.status(404).json({ message: "No new chat data."});
                    return;
                  }
                Chat.findOne({ _id: newChatData.id })
                .populate("users", "-password")
                .then((createdChatData)=> {

                  if (!createdChatData){
                    res.status(404).json({ message: "No new chat data created."});
                    return;
                  }
                  res.status(200).json(createdChatData);
                })
                .catch(err => res.json(err));
              })
          })
        });
    })
  },
  
  
  async getChats(req, res) {
      Chat.find({})
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  }
}