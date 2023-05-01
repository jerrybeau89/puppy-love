const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Chat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getUsers: () =>  User.find({}),
        // Returns a single user by ID
        getUser: async (parent, { id }) => {
            const user = await User.findOne({_id: id})
                .select('-__v');

            if(!user){
                throw new Error("User not found");
            }

            return user;
        },

        getMessages: async (parent, { chatId }) => {
            const messages = await Message.findOne({ chat: chatId })
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

        getUserMatches: async (parent, { id }) => {
            const matchData = await User.findById({ _id: id }).select('username matches');
            
            if(!matchData){
                throw new Error('User not found');
            }

            return matchData;
        },

        getMatchField: async (parent, { id }) => {
            //gets all the users that are liked or disliked
            const seenData = await User.findById(id)
                .select(`likes dislikes`);

            if(!seenData){
                throw new Error('User not found');
            }

            const potentialMatches = await User.find(
                {_id: { $nin: [...seenData.likes, ...seenData.dislikes, id]}}
            )
            .select(`username name gender pet`)
            .sort({ _id: 1 });

            return potentialMatches;
        },

        getSingleChat: async (parent, {from, to}) => {

            const userFrom = await User.findOne({username: from});

            const userTo = await User.findOne({username: to});

            if(!userFrom || !userTo){
                throw new Error('User not found');
            }
            const chat = await Chat.findOne({
                users: { $all: [userFrom._id, userTo._id]}
            })

            const messages = await Message.find(
                { chat: chat._id }
            );

            return {chat, messages};
        },

        getChats: async () => {
            const chatData = await Chat.find({})
            .populate('users', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 });

            return chatData;
        }
    },

    Mutation: {
        signup: async (parent, req) => {
            const user = await User.create({
                username: req.username,
                email: req.email,
                password: req.password,
                pet: req.pet instanceof Array?
                    req.pet :
                    [req.pet],
            });
            const token = signToken(user);
            return {token, user};
        },

        login: async (parent, { email, password}) => {
            const user = await User.findOne({email: email});
            if (!user) {
                throw new AuthenticationError("User not found");
            }

            const isPasswordValid = user.password === password;
            
            if (!isPasswordValid) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        updateUser: async (parent, {id, body}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: id },
                body,
                { new: true }
            );

            if(!updatedUser){
                throw new Error("User not found");
            }

            return updatedUser;
        },

        like: async (parent, { user, liked }) =>  {
            const likedUser = liked._id ? 
                await User.findById(liked._id)
                : await User.find({username: liked.username});

            if(!likedUser){
                return "User not found";
            }

            let identification = user._id ? 
                { _id: user._id }
                : {username: user.username};

            const currentUser = await User.findOneAndUpdate(
                { identification },
                { $addToSet: { likes: likedUser._id.toString() }}
            );

            if(!currentUser){
                return "User not found"
            }

            const likesCurrent = await User.findOne({
                _id: likedUser._id,
                likes: currentUser._id
            });

            if(likesCurrent){
                await User.findOneAndUpdate(
                    { _id: likedUser._id },
                    { $addToSet: { matches: currentUser._id}}
                );
                await User.findOneAndUpdate(
                    { _id: currentUser._id },
                    { $addToSet: { matches: likedUser._id}}
                );
                return `${currentUser.name} matched with ${likedUser.name}`
            }

            return "Successful Like";
        },

        dislike: async (parent, { user, disliked }) => {
            try{
                let identification = user._id ?
                    { _id: user._id }
                    : { username: user.username} ;

                let dislikedIdentification = disliked._id ?
                { _id: disliked._id }
                : { username: disliked.username} ;

                const dislikedUser = await User.findOne(
                    { dislikedIdentification }
                );

                const dislikedData = await User.findOneAndUpdate(
                    { identification },
                    { $addToSet: { dislikes: dislikedUser._id }},
                    { new: true }
                );

                if(!dislikedData){
                    return `User not found`;
                }

                return `Successful dislike`;
            }catch (err){
                throw new Error(err);
            }
        },

        sendMessage: async (parent, { content, from, recipient}) => {
            if(!content || !from){
                return `No content or user`;
            }

            if(recipient.chatId) {
                const messageData = await Message.create({
                        sender: from,
                        content: content,
                        chat: recipient.chatId
                    }
                );

                if(!messageData){
                    return `Message couldn't be created`;
                }

                const updatedChat = await Chat.findOneAndUpdate(
                    { _id: recipient.chatId },
                    { latestMessage: messageData._id },
                    { new: true }
                );

                if(!updatedChat){
                    throw new Error(`Couldn't update chat`);
                }
            }else{

                let identification = recipient.readBy._id?
                    { _id: recipient.readBy._id }
                    :{ username: recipient.readBy.username };

                const userTo = await User.findOne({
                    identification
                }).select(`_id`);

                const messageData = await Message.create({
                        sender: from,
                        content: content,
                        readBy: userTo._id
                    }
                ); 

                if(!messageData){
                    throw new Error(`Message couldn't be created`);
                }

                const chat = await Chat.findOneAndUpdate(
                    { users: { $all: [from, userTo._id]} },
                    { latestMessage: messageData._id },
                    { new: true }
                );

                if(!chat){
                    throw new Error(`Couldn't update chat`);
                }

            }

            return `Message successfully sent`;
        }
    },

};

module.exports = resolvers;