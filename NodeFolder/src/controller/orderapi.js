
const Order = require("../models/Order");

exports.orderadd = async (req, res)=>{
    const { productid, userid, userName, productimage } = req.body;
    try {
      const order = await Order.create({
        productid, userid, userName, productimage
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
