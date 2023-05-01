const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Chat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async() =>  User.find(),
        // Returns a single user by ID
        user: (parent, { id }) => User.findById(id),

        // Returns all users that match the given pet preferences
        usersByPetPreferences: (parent, { petPreferences }) =>
            User.find({ petPreferences }),

        // Returns all users that match the given gender preference
        usersByGenderPreference: (parent, { genderPreference }) => {
            User.find({ gender: genderPreference })
        },

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
            const user = await User.findOne({$or: [ 
                {username: username },
                {email: email}
            ]});

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const isPasswordValid = await user.comparePassword(password);
            
            if (!isPasswordValid) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        sendMessage: async (parent, { input }, { user }) => {
            const { content, chatId } = input;
            if (!content || !chatId) {
              throw new Error('No content or chatId.');
            }
            const newMessage = {
              sender: user._id,
              content: content,
              chat: chatId,
            };
            const messageData = await Message.create(newMessage)
              .populate('sender', 'name pic')
              .populate('chat');
            if (!messageData) {
              throw new Error('No message data.');
            }
            const recentMessage = await User.populate(messageData, {
              path: 'chat.users',
              select: 'name email pic',
            });
            await Chat.findByIdAndUpdate(chatId, { latestMessage: recentMessage });
            return recentMessage;
          },

          deleteMessage: async (parent, { id }) => {
            const messageData = await Message.findByIdAndDelete(id).select('_id');
            if (!messageData) {
              throw new Error('Cannot find a message with this id!');
            }
            return messageData;
          },
    },

};

module.exports = resolvers;