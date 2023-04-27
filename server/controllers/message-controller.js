const { Message } = require('../models');

module.exports = {
    async getMessages(req, res)  {
        const messages = await Message.find({});
        res.json(messages);
    },

    async getMatchMessages({}, res){
        const user = await User.find({});
    },
}