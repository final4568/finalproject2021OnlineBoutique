

const express = require("express");
const router = express.Router();

const {
    orderadd,
    seeorder,
    getsingleoder,
    deleteorder
} = require("../controller/orderapi");

router.route("/orderadd").post(orderadd);
router.route("/seeorder").get(seeorder);
router.route("/orderdetail/:id").get(getsingleoder);
router.route("/deleteorder/:id").delete(deleteorder);

module.exports = router;
