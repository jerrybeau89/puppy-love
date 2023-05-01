const { Message, User, Chat } = require('../models');

module.exports = {

    async sendMessage(req, res) {
      const { content, chatId, username} = req.body;
      if(!content || !chatId || !username) {
        res.status(400).json({ message: 'No content or chatId.' });
        return;
      }

      const userId = await User.findOne({username: req.body.username})
      .select('_id')
      .then((userId) => {
        if(!userId){
          res.status(404).json({message: "No user ID."});
          return;
        }
        res.json(userId);
      });
      const newMessage = {
        sender: userId,
        content: content,
        chat: chatId,
      };

      console.log(newMessage)
      const message = await Message.create(newMessage);
        message.populate("sender", "name pic")
        message.populate("chat")
        .then((messageData) => {
          if(!messageData){
            res.status(404).json({message: "No message data."});
            return;
          }

          User.populate(messageData, {
            path: "chat.users",
            select: "name email pic",
          });
        })
        .then((recentMessage) => {

          if(!recentMessage){
            res.status(404).json({message: "No message data."});
            return;
          }
          Chat.findByIdAndUpdate(
            req.body.chatId, 
            { latestMessage: recentMessage });
            res.json(recentMessage);
          })
          .catch(err => res.json(err));
    }, 

    async getMessages(req, res)  {
      const allMessages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat")
      .then((allMessages) => {

        if (!allMessages){
          res.status(404).json({message: "No messages found."})
        }
        res.json(allMessages);
      })
      .catch(err => res.json(err));
    },

    async getMatchMessages({ params }, res){
      Message.findOne({ _id: params.id})
        .select('_id')
        .then(matchMessage => {
            res.json(matchMessage);
        })
    },

    async deleteMessage({params}, res) {
      Message.destroy({ _id: params.id })
        .select('_id')
        .then(messageData => {
            if(!messageData){
                res.status(400).json({ message: 'Cannot find a message with this id!' });
                return;
            }
            res.json(messageData);
        });
    }, 
}