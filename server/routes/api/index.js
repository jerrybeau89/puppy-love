const router = require('express').Router();
const userRoutes = require('./user-routes');
const messageRoutes = require('./message-routes');
const matchRoutes = require('./match-routes');
const chatRoutes = require('./chat-routes')

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/matches', matchRoutes);
router.use('/chats', chatRoutes);

module.exports = router;