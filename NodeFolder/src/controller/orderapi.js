
const Order = require("../models/Order");

exports.orderadd = async (req, res)=>{
    const { productname, productid, userid, username, productimage,
    usergmail, useraddress, phone, quantity, chest, shirtlength, sleevlength,
    sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
    hip, thigh, knee, legopening,suitsize,tailodate } = req.body;
    try {
      const order = await Order.create({
        productname, productid, userid, username, productimage,
        usergmail, useraddress, phone, quantity, chest, shirtlength, sleevlength,
        sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
        hip, thigh, knee, legopening, suitsize, clientdate,tailodate
      });
  
      order.save().then(()=>{
          res.status(200).json({
              success:true,
              message:"Ordered Successfully"
          })
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
      //next(error);
    }
};

exports.seeorder = (req, res)=>{
    Order.find((err, docs)=>{
        if(err){
            console.log(err);
        }else{
            res.json(docs)
        }
    })

};
