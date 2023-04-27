const router = require('express').Router();
const {
    getMessages,

} = require('../../controllers/message-controller');

router.route('/')
    .get(getMessages);

module.exports = router;