const router = require('express').Router();
const userRoutes = require('./user-routes');
const messageRoutes = require('./message-routes');
const matchRoutes = require('./match-routes');

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/matches', matchRoutes);

module.exports = router;