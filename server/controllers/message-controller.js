const { Message } = require('../models');

module.exports = {
    async getMessages(req, res)  {
        const messages = await Message.find({});
        res.json(messages);
    }
}