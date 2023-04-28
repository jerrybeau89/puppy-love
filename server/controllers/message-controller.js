const { Message, User } = require('../models');

module.exports = {
    async getMessages(req, res)  {
        Message.find({})
            .select("-__v")
            .then(messageData => {
                res.json(messageData);
            });
    },

    async getMatchMessages({ body }, res){
        const user = await User.find({_id: body.id});

        res.status(200);
    },
    
    async createMessage({ body }, res) {
        //formatted as
        //content [{
        //     from [{
        //         user: references the user
        //         message: contains text and a timestamp
        //     }]
        //    to [{
        //         user: references the user
        //         message: contains text and a timestamp
        //     }]
        // }]
        const user = await Message.create({ body });
    }, 
}