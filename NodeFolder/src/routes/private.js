const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/auth");

router.route("/").get( protect, (req, res)=>{
    res.status(200).json({
        success: true,
        data:"You got sucess to the private data in this route",
    })
});

module.exports = router;
