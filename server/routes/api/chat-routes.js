const router = require('express').Router();
const {
    accessChat,
    fetchChats,
} = require("../../controllers/chat-controller");

router.route("/")
  .get(fetchChats)
  .post(accessChat);

module.exports = router;
