const router = require('express').Router();

const { 
    sendMessage,
    getMessages,
    getMatchMessages,
    deleteMessage,
} = require('../../controllers/message-controller');

router.route('/:chatId')
    .get(getMessages);

router.route('/match/messages/')
    .get(getMatchMessages)
    .post(sendMessage)
    .delete(deleteMessage);

module.exports = router;