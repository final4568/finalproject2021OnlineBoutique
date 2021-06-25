

const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  productid: {
    type: String
  },
  userid: {
    type: String
  },
  userName:{
    type: String
  },
  productimage:{
    type:String
  }
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
