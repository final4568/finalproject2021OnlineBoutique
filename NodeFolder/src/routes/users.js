
const express = require('express');
const router = express.Router();

const {
    register, 
    login,
    forgotpassword,
    resetpassword,
    getallusers,
    deleteUser,
    Userprofile

} = require("../controller/users");

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/getallusers").get(getallusers);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/userprofile/:id").get(Userprofile);




module.exports = router;