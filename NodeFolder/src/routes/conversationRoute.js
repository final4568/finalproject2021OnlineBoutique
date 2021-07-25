



const express = require("express");
const router = express.Router();

const {
    Conversationadd,
    getconversation
    
} = require("../controller/conversationapi");

router.route("/").post(Conversationadd);
router.route("/:userid").get(getconversation);




module.exports = router;
