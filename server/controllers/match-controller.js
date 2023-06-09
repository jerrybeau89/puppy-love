const { User } = require('../models');

module.exports = { 
 
    async getUserMatches({ params }, res) {
      User.findById({ _id: params.id })
      .select("name matches")
      .then(userData => {
          if(!userData){
              return res.status(400).json({ message: 'Cannot find a user with this id!' });
          }
          res.json(userData);
      });
    }, 

    async getMatch({ params }, res) {
      User.findById({ _id: params.id })
      .select("_id")
      .then(userData => {
          if(!userData){
              return res.status(400).json({ message: 'Cannot find a user with this id!' });
          }
          res.json(userData);
      });
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
              {username: req.body.username},
              //updating the list
              { $addToSet: { likes: likedUser._id.toString() }}
          )
          .then((userData) => {
                if(!userData){
                    res.status(404).json({ message: "No user found with that name"});
                    return;
                }

                //checks if the liked user likes the current user
                User.findOne({
                    _id: likedUser._id,
                    likes: userData._id
                })
                //if so we update the matches so that they are in each others matches
                .then(async likesCurrent => {
                    if(likesCurrent){
                        await User.findOneAndUpdate(
                            { _id: likedUser._id },
                            { $addToSet: { matches: userData._id } }
                        );
                        await User.findOneAndUpdate(
                            { _id: userData._id },
                            { $addToSet: { matches: likedUser._id.toString() } }
                        );
                    }

                });

              
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
              {username: req.body.username},
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

}