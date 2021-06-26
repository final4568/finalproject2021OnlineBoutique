

const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  
  productname:{type: String,},
  productid: {type: String },
  userid:{ type: String },
  username:{type: String },
  productimage:{type:String },
  usergmail:{type:String},
  name:{type:String, require:true},
  gmail:{type:String},
  phone:{ type: Number, minlength:10, require:true},
  quantity:{ type: Number, require:true},
  chest:{type: Number, require:true},
  shirtlength:{type: Number, require:true},
  sleevlength:{type: Number, require:true},
  sholder:{type: Number, require:true},
  overarm:{type: Number, require:true},
  waistcoatlength:{type: Number, require:true},
  wrist:{type: Number,require:true},
  neck:{type: Number, require:true},
  pntlength:{type: Number, require:true},
  pnwaist:{type: Number, require:true},
  hip:{type: Number, require:true},
  thigh:{type: Number, require:true},
  knee:{type: Number, require:true},
  legopening:{type: Number, require:true},
  suitsize:{type:String, require:true},
  clientdate:{type:Date, require:true, trim: true},
  tailodate:{type:Date},
  useraddress:{type: String,require:true},
  tailortype:{type:String, require :true}


});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
