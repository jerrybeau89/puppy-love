const { User } = require('../models');

module.exports = {

    async getUsers(req, res) {
        const users = await User.find({}).select("-__v");
        res.json(users);
    },
    async createUser({ body }, res) {
        const user = await User.create(body);
    },

    async login( { body }, res) {
        const user = await User.findOne({});
    },

    async getUserProfile({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(userData => {
                if(!userData){
                    return res.status(400).json({ message: 'Cannot find a user with this id!' });
                }
                res.json(userData);
            });
    },

    // async getUserPreferences({}, res){
    //     const user = await User.find({});
    // },

    // async setUserPreferences({}, res){
    //     const user = await User.findOneAndUpdate({});
    // },

    // async getFilterPreferences({}, res) {
    //     const user = await User;
    // },

    // async setFilterPreferences({}, res) {
    //     const user = await User;
    // }
}

 
   
    