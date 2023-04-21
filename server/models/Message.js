const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }
);

const Message = model('Message', messageSchema);

module.exports = Message;