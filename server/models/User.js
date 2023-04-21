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
        email: {
            type: String,
            required: true,
            match: [/.+@.+\.(com|org|net|edu)/, "Please enter a valid email"]
        },
        verified: {
            type: Boolean,
            
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
        createdAt: {
            type: Date,
            default: Date.now,
            //just basic unformatted request
            get: timestamp => {
                return timestamp;
            }
        }
    },
    //options
    {

    }
);

const User = model('User', userSchema);

module.exports = User;