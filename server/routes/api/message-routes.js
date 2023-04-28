const router = require('express').Router();

const { 
    sendMessage,
    getMessages,
    getMatchMessages,
    deleteMessage,
} = require('../../controllers/message-controller');

router.route('/')
    .get(getMessages);

router.route('/match/messages/')
    .get(getMatchMessages)
    .post(sendMessage);

router.route('/match/messages/:id')

module.exports = router;