const { Message, User, Chat } = require('../models');

module.exports = {

    async sendMessage(req, res) {
      const {content, chatId } = req.body;
      if(!content || !chatId) {
        res.status(400).json({ message: 'No content or chatId.' });
        return;
      }

      let newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
      };

      const message = await Message.create(newMessage)
        .populate("sender", "name pic").execPopulate()
        .populate("chat").execPopulate();
      User.populate(message, {
          path: "chat.users",
          select: "name email pic",
        });
      Chat.findByIdAndUpdate(
        req.body.chatId, 
        { latestMessage: message });
          res.json(message);
    }, 

    async getMessages(req, res)  {
      const allMessages = await Message.find({});
      res.json(allMessages);
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