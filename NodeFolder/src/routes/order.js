

const express = require("express");
const router = express.Router();

const {
    orderadd,
    seeorder,
    getsingleoder,
    deleteorder,
    orderUpdate,
    orderbyUserid,
    orderbytailor
} = require("../controller/orderapi");

router.route("/orderadd").post(orderadd);
router.route("/seeorder").get(seeorder);
router.route("/orderdetail/:id").get(getsingleoder);
router.route("/deleteorder/:id").delete(deleteorder);
router.route("/orderUpdate/:id").put(orderUpdate);
router.route("/orderbyUserid").post(orderbyUserid);
router.route("/orderbytailor").post(orderbytailor);


module.exports = router;
