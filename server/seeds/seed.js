const db = require('../config/connection');
const { User, Message } = require('../models');
const userSeeds = require('./userSeeds.json');
const chatSeeds = require('./chatSeeds.json');

db.once('open', async () => {
    try{
        await User.deleteMany({});
        await User.create(userSeeds);

        await Message.deleteMany({});
        await Message.create(chatSeeds);

        console.log('all done seeding');
        process.exit(0);
    } catch (err) {
        throw err;
    }
})