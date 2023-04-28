const { Message, User } = require('../models');

module.exports = {

    async sendMessage(req, res) {
      const createMessage = await Message.create({
        ...req.body,
      });
      res.json(createMessage);
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