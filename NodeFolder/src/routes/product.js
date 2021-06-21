

const express = require("express");
const router = express.Router();

const { 
    upload, 
    uploadImage,
    getallproducts,
    deleteproduct,
    productdetail
} = require("../controller/products");

router.post('/upload', uploadImage, upload);
router.route('/getallproducts').get(getallproducts);
router.route('/delete/:id').delete(deleteproduct);
router.route('/productdetail/:id').get(productdetail);

module.exports = router;