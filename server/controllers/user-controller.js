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
        const user = await User.findById(body.id);
    },

    async getUserProfile({ params }, res) {
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

    async getUserPreferences({}, res){
        const user = await User.find({});
    },

    async setUserPreferences({}, res){
        const user = await User.findOneAndUpdate({});
    },

    async getMatchField(req, res) {
        try{
            await User.find({username: { $not: { $eq: req.params.username}}})
            .select('username name gender pet')
            //sorts descendingly
            .sort({ _id: 1 })
            //returns the users
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });;

        } catch (err){
            res.json(err);
        }
    },

    async getPotentialMatch({}, res) {
        const user = await User.findById({})
    }, 

    async createMessage({}, res) {
        const user = await User.create({});
    }, 

    async getFilterPreferences({}, res) {
        const user = await User;
    },

    async setFilterPreferences({}, res) {
        const user = await User;
    }
}

 
   
    