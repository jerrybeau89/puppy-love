const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        //some kind of contact email or phone number
        contact: {
            type: String,
            required: true
        },
        matches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        petPreferences: [
            {
                type: String,
                default: 'all'
            }
        ],
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Message'
            }
        ]
    },
    //options
    {

    }
);

const User = model('User', userSchema);

module.exports = User;