const { User } = require('../models');

module.exports = {
    async createUser({ body }, res) {
        const user = await User.create(body);
    },

    async getSingleUser({ params }, res) {
        const user = await User.findOne({ _id: params.id });

        if(!user){
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(user);
    },

    async login( { body }, res) {
        const user = await User.findById(body.id);
    }
}