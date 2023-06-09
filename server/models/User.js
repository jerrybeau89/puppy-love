const { Schema, model } = require('mongoose');
const Message = require('./Message');
//import logo from 'client/src/img/logo.PNG'

const userSchema = new Schema(
    {
        //login details
        name: {
            type: String,
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\.(com|org|net|edu)/, "Please enter a valid email"]
        },
        pic: {
            type: String,
        },
        dob: {
            type: Date,
            validate: {
                validator: function(value) {
                    let eighteenYearsAgo = new Date();
                    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
                    return value < eighteenYearsAgo;
                },
                message: 'You must be over 18 years old to use this app'
            }
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
        pet: [
            {
                type: String,
                enum: ['dog', 'cat', 'reptile', 'spider', 'snake', 'fish', 'bird', 'other'],
                required: false,
            }
        ],
        petPreferences: [
            {
                type: String,
                enum: ['dog', 'cat', 'reptile', 'spider', 'snake', 'fish', 'bird', 'other'],
            }
        ],
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        dislikes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        matches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
        potentialMatches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    { 
        timestamps: true
    }
);

const User = model('User', userSchema);

module.exports = User;