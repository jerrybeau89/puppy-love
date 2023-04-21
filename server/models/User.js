const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        //login details
        name: {
            first: String,
            last: String
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\.(com|org|net|edu)/, "Please enter a valid email"]
        },
        phoneNumber: {
            type: String,
        },
        //extra
        bio: {
            type: String,
            default: ''
        },
        verified: {
            type: Boolean,
            default: false
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        notInterested: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        matches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        preferences: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Preference'
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
        virtuals: {
            fullName: {
                get() {
                    return `${this.name.first} ${this.name.last}`;
                }
            }
        }
    }
);

const User = model('User', userSchema);

module.exports = User;