const db = require('../config/connection');
const { User, Message } = require('../models');
const userSeeds = require('./userSeeds.json');
const messageSeeds = require('./messageSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await User.create(userSeeds);

        await Message.deleteMany({});
        await Message.create(messageSeeds);

        console.log('all done seeding');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})