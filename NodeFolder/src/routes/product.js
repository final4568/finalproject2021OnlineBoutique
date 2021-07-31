const express = require("express");
const router = express.Router();

const {
  upload,
  uploadImage,
  getallproducts,
  deleteproduct,
  productdetail,
  update,
  maleproducts,
} = require("../controller/products");

router.post("/upload", uploadImage, upload);
router.put("/update/:id", uploadImage, update);
router.route("/getallproducts").get(getallproducts);
router.route("/delete/:id").delete(deleteproduct);
router.route("/productdetail/:id").get(productdetail);
router.route("/maleproducts").post(maleproducts);

module.exports = router;
