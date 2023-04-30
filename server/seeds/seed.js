const db = require('../config/connection');
const { User, Message, Chat } = require('../models');
const userSeeds = require('./userSeeds.json');
// const messageSeeds = require('./messageSeeds.json')
// const chatSeeds = require('./chatSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await User.create(userSeeds);

        // await Chat.deleteMany({});
        // await Chat.create(chatSeeds);
        
        // await Message.deleteMany({});
        // await Message.create(messageSeeds);

        console.log('all done seeding');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})