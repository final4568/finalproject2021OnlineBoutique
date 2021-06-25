

const express = require("express");
const router = express.Router();

const {
    orderadd,
    seeorder
} = require("../controller/orderapi");

router.route("/orderadd").post(orderadd);
router.route("/seeorder").get(seeorder);

module.exports = router;
