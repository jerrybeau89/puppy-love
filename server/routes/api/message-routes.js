const router = require('express').Router();

const { 
    createMessage,
    getMessages,
    getMatchMessages,
    deleteMessage,
} = require('../../controllers/message-controller');
const { getMatch } = require('../../controllers/match-controller');

router.route('/')
    .get(getMessages);

router.route('/match/messages/')
    .get(getMatchMessages)
    .post(createMessage);

router.route('/match/messages/:id')

module.exports = router;