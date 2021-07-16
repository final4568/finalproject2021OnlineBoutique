const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema({
    collerid:{type:String},
    collercolor:{type:String},
    bodyid:{type:String},
    bodycolor:{type:String},
    productname:{type:String},
    productcategory:{type:String},
});

const CustomManModel = mongoose.model("CustomManModel",CustomSchema );
module.exports = CustomManModel;