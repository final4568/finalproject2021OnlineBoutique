

const express = require("express");
const router = express.Router();

const {
    orderadd,
    seeorder,
    getsingleoder,
    deleteorder,
    orderUpdate,
    orderbyUserid,
    orderbytailor,
    getorderbyproducttype,
    customorderbyuser,
    customorderbyuserPN,
    getorderbyproducttypePN
} = require("../controller/orderapi");

router.route("/orderadd").post(orderadd);
router.route("/seeorder").get(seeorder);
router.route("/orderdetail/:id").get(getsingleoder);
router.route("/deleteorder/:id").delete(deleteorder);
router.route("/orderUpdate/:id").put(orderUpdate);

router.route("/orderbyUserid").post(orderbyUserid);
router.route("/orderbytailor").post(orderbytailor);
router.route("/orderbytype").post(getorderbyproducttype);
router.route("/customorderbyuser").post(customorderbyuser);
router.route("/customorderbyuserPN").post(customorderbyuserPN);
router.route("/customorderPTPN").post(getorderbyproducttypePN);



module.exports = router;
