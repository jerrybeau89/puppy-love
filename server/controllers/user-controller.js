const { User } = require('../models');

module.exports = {
    async createUser({ body }, res) {
        const user = await User.create(body);
    },

    async login( { body }, res) {
        const user = await User.findById(body.id);
    },

    async getUserProfile({}, res) {
        const user = await User.findOne({ _id: params.id });

        if(!user){
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(user);
    },

    async getUserMatches({}, res) {
        const user = await User.find({});
    }, 

    async getMatch({ body }, res) {
        const user = await User.findById(body.id)
    },

    async getMatchMessages({}, res){
        const user = await User.find({});
    },

    async userMatched({}, res) {
        const user = await User;
    },

    // async getUserPreferences({}, res){
    //     const user = await User.find({});
    // },

    // async setUserPreferences({}, res){
    //     const user = await User.findOneAndUpdate({});
    // },

    async getMatchField({}, res) {
        const user = await User.find({})
    },

    async getPotentialMatch({}, res) {
        const user = await User.findById({})
    }, 

    async createMessage({}, res) {
        const user = await User.create({});
    }, 

    // async getFilterPreferences({}, res) {
    //     const user = await User;
    // },

    // async setFilterPreferences({}, res) {
    //     const user = await User;
    // }
}

 
   
    