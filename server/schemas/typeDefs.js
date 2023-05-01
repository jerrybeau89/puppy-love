const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Chat {
        _id: ID!
        users: [User!]!
        latestMessage: Message
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String
        username: String!
        password: String!
        email: String!
        pic: String
        dob: String
        phoneNumber: String
        gender: Gender
        pet: [Pet!]!
        petPreferences: [Pet]
        likes: [User]
        dislikes: [User]
        matches: [User]
        potentialMathces: [User]
        createdAt: String!
        updatedAt: String!
    }

    type Auth {
        token: ID
        user: User
    }

    enum Gender {
        male
        female
        nonbinary
        none
    }

    enum Pet {
        dog
        cat
        reptile
        spider
        snake
        fish
        bird
        other
    }

    type Message {
        _id: ID!
        content: String!
        chat: [Chat!]!
        readBy: [User!]!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getUser(_id: ID!): User
        getUsers: [User!]!
        getMessages(chatId: ID!): [Message]!
        getMatchMessages(_id: ID!): Message!
        getUserMatches(_id: ID!): User!
        getMatchField(_id: ID!): [User!]!
        getSingleChat(from: String!, to: String!): Chat
        getChats: [Chat!]!
    }

    type Mutation {
        createUser(
            name: String
            username: String!
            password: String!
            email: String!
            dob: String
            phoneNumber: String
            gender: Gender
            pet: [Pet]
            petPreferences: [Pet]
        ): Auth
        login(email: String!, password: String!): Auth
        updateUser(_id: ID!, body: UpdateUserInput!): User
        like(userId: ID!, likedId: ID!): String
        dislike(userId: ID!, dislikedId: ID!): String
    }

    input UpdateUserInput {
        name: String
        username: String
        email: String
        dob: String
        phoneNumber: String
        gender: Gender
        pet: [Pet]
        petPreferences: [Pet]
    }
`;

module.exports = typeDefs;