const express = require("express");
const router = express.Router();

const { addmessages, getmessages } = require("../controller/messageapi");

router.route("/").post(addmessages);
router.route("/:conversationid").get(getmessages);

module.exports = router;
