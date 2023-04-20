const { User } = require('../models');

module.exports = {
    async createUser({ body }, res) {
        const user = await User.create(body);
    },

    async getSingleUser({}) {

    }
}