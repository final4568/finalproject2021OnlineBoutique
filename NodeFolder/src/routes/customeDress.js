




const express = require("express");
const router = express.Router();

const {
 save,
 getmodelproperties
} = require("../controller/customdress");

router.route("/save").post(save);
router.route("/getmodelpro/:id").get(getmodelproperties);



module.exports = router;
