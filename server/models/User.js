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
            //phone format use either / or - for 
            //areaCode 7digitNumber
            match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Please enter a valid phone number"]
        },
        //extra
        gender: {
            type: String,
            enum: ['male', 'female', 'nonbinary', 'none'],
            default: 'none'
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        rejects: [
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
        preferences: {
            type: Schema.Types.ObjectId,
            ref: 'Preference'
        },
        potentialMatches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
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