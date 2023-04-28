const { Message, User, Chat } = require('../models');

module.exports = {

  async accessChat(req, res) {
    const { userId } = req.body;
    
    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }
    
    var isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user.id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");
    
    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });
    
    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
      users: [req.user.id, userId],
    };
    
    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat.id }).populate(
        "users",
        "-password"
        );
        res.status(200).json(FullChat);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
    }
  },
  
  
  async fetchChats(req, res) {
      Chat.find({ users: { $elemMatch: { $eq: req.user.id} } })
      .populate("users")
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