const db = require('../config/connection');
const { User, Message, Chat } = require('../models');
const userSeeds = require('./userSeeds.json');
const messageSeeds = require('./messageSeeds.json')
const chatSeeds = require('./chatSeeds.json');
const matchSeeds = require('./matches.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await User.create(userSeeds);

        
        //format the chat seeds
        for(let chat of chatSeeds) {
            //sets the first user
            await User.findOne(
                { email : chat.users[0].email}
            ).select("_id")
            .then(userData => {
                chat.users[0] = userData._id;
            })
            .catch(err => console.log(err));

            //sets the second user
            await User.findOne(
                { email : chat.users[1].email}
            ).select("_id")
            .then(userData => {
                chat.users[1] = userData._id;
            })
            .catch(err => console.log(err));
        };

        await Chat.deleteMany({});
        await Chat.create(chatSeeds);

        //format the message seeds
        for(let message of messageSeeds){
            //get sender
            await User.findOne(message.sender)
            .select("_id")
            .then(userData => {
                message.sender = userData._id;
            });
            //get recipient
            await User.findOne(message.readBy)
            .select("_id")
            .then(userData => {
                message.readBy = userData._id;
            });
            //find chat reference
            await Chat.find({
                users: { $all: [message.sender, message.readBy]}
            })
            .select("_id")
            .then(chatData => {
                message.chat = chatData._id;
            });
        }
        
        await Message.deleteMany({});
        await Message.create(messageSeeds);

        for(let match of matchSeeds){
            await User.findOne(match.user1)
            .select("_id")
            .then(async firstUser => {
                await User.findOne(match.user2)
                .select("_id")
                .then(async secondUser => {
                    await User.findOneAndUpdate(
                        { _id: firstUser._id},
                        { $addToSet: {likes: secondUser._id, matches: secondUser._id}}
                    );
                    await User.findOneAndUpdate(
                        { _id: secondUser._id },
                        { $addToSet: {likes: firstUser._id, matches: firstUser._id}}
                    );
                });
            });
        }

        console.log('all done seeding');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})