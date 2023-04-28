const router = require('express').Router();
const {
    getMessages,
    getMatchMessages
} = require('../../controllers/message-controller');

router.route('/')
    .get(getMessages);

module.exports = router;