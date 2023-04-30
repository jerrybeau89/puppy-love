const router = require('express').Router();
const {
    getSingleChat,
    getChats,
} = require("../../controllers/chat-controller");

router.route("/")
  .get(getChats)
  .post(getSingleChat);

module.exports = router;
