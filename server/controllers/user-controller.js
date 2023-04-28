const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    async getUsers(req, res) {
        const users = await User.find({}).select("-__v");
        res.json(users);
    },

    async createUser({ body }, res) {
        try {
            const newUser = await User.create(body);

            if(!newUser){
                res.status(500).json({ message: "Something went wrong" });
                return;
            }

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            res.json({ token });
            res.status(200).json({ message: "User created successfully", newUser });
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async login({ username, password }, res) {
        // Check if user exists in the database
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is correct
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token and send it to the client
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
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
            .select('_id username name gender pet')
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

    // async getFilterPreferences({}, res) {
    //     const user = await User;
    // },

    // async setFilterPreferences({}, res) {
    //     const user = await User;
    // }
}

 
   
    