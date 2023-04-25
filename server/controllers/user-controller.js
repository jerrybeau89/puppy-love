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

    //needs to be given a request body in a json object that contains two things
    //user which is the name of the user
    //like which is the user to be disliked
    async like(req, res){
        User.findOne({username: req.body.like})
        .select("_id")
        .then(likedUser => {
            User.findOneAndUpdate(
                //currentUser
                {username: req.body.user},
                //updating the list
                { $addToSet: { likes: likedUser._id.toString() }}
            )
            .then((userData) => {
                if(!userData){
                    res.status(404).json({ message: "No user found with that name"});
                    return;
                }
                res.status(200).json({ message: "successful like" });
            })
            .catch(err => res.json(err));
        });
    },

    //needs to be given a request body in a json object that contains two things
    //user which is the name of the user
    //dislike which is the user to be disliked
    async dislike(req, res){
        User.findOne({username: req.body.dislike})
        .select("_id")
        .then(dislikedUser => {
            User.findOneAndUpdate(
                //currentUser
                {username: req.body.user},
                //updating the list
                { $addToSet: { dislikes: dislikedUser._id.toString() }}
            )
            .then((userData) => {
                if(!userData){
                    res.status(404).json({ message: "No user found with that name"});
                    return;
                }
                res.status(200).json({ message: "successful dislike" });
            })
            .catch(err => res.json(err));
        });
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

    //requires the url to be formatted to /api/users/field/:username
    //:username will pass in the user
    async getMatchField(req, res) {
        User.findOne({username: req.params.username})
        .select('_id likes dislikes')
        .then(userProfile => {
            const likes = userProfile.likes;
            const dislikes = userProfile.dislikes;

            User.find(
                {_id: { $nin: [...likes, ...dislikes, userProfile._id.toString()]}}
            )
            .select('username name gender pet')
            //sorts descendingly
            .sort({ _id: 1 })
            //returns the users
            .then(dbUserData => res.json(dbUserData))
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });        
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

 
   
    