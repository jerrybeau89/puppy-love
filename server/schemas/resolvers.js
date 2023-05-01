const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Chat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getUsers: async() =>  User.find(),
        // Returns a single user by ID
        getUser: (parent, { id }) => User.findById(id),

        getMessages: async (parent, { chatId }) => {
            const messages = await Message.find({ chat: chatId })
                .populate('sender', 'name pic email')
                .populate('chat');
            if (!messages) {
                throw new Error('No messages found.');
            }
            return messages;
        },

        getMatchMessages: async (parent, { id }) => {
            const matchMessage = await Message.findOne({ _id: id }).select('_id');
            if (!matchMessage) {
                throw new Error('No match message found.');
            }
            return matchMessage;
        },
    },

    Mutation: {
        createUser: async (parent, body) => {
            const user = await User.create(body);
            const token = signToken(user);
            return {token, user};
        },

        login: async (parent, { email, password}) => {
            const user = await User.findOne({email: email});
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const isPasswordValid = user.password === password;
            
            if (!isPasswordValid) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    },

};

module.exports = resolvers;