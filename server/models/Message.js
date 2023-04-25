const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        content: [{
            from: [{
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                message: [{
                   text: {
                    type: String,
                    required: true,
                    },
                    timestamp: {
                        type: Date,
                        default: Date.now
                    }
                }]
                
            }],
            to: [{
                user: { 
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                message: [{
                    text: {
                     type: String,
                     required: true,
                     },
                     timestamp: {
                         type: Date,
                         default: Date.now
                     }
                 }]
            },]
        }],    
    }
);

const Message = model('Message', messageSchema);

module.exports = Message;