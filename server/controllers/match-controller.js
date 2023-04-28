const { User } = require('../models');

module.exports = {
    async getUserMatches({}, res) {
        const user = await User.find({});
    }, 

    async getMatch({ body }, res) {
        const user = await User.findById(body.id)
    },
    
    async userMatched({}, res) {
        const user = await User;
    },
}