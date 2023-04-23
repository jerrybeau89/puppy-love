const { Schema, model} = require('mongoose');

const preferenceSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        petPreferences: [
            {
                type: String,
                enum: ['dog', 'cat', 'reptile', 'spider', 'snake', 'fish', 'bird', 'other','any'],
                default: 'any'
            }
        ],
        datePreferences: [
            {
                type: String,
                enum: ['male', 'female', 'nonbinary', 'none'],
                default: 'none'
            }
        ]
    }
);

const Preference = model('Preference', preferenceSchema);

module.exports = Preference;