
const Order = require("../models/Order");

exports.orderadd = async (req, res)=>{
    const { productname, productid, userid, username, productimage, name,
    usergmail, gmail, phone, quantity, chest, shirtlength, sleevlength,
    sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
    hip, thigh, knee, legopening, suitsize,tailodate, clientdate,useraddress, 
    tailortype,producttype, productcategory, orderprogress,orderstatus} = req.body;
    try {
      const order = await Order.create({
        productname, productid, userid, username, productimage,name,
        usergmail, gmail, phone, quantity, chest, shirtlength, sleevlength,
        sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
        hip, thigh, knee, legopening, suitsize, clientdate,tailodate, useraddress, 
        tailortype, producttype, productcategory,orderprogress, orderstatus
        //orderstatus, tailodate
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
   
    }
};

exports.seeorder = async(req, res)=>{
    await Order.find((err, docs)=>{
        if(err){
            console.log(err);
        }else{
            res.json(docs)
        }
    })
};



exports.getsingleoder = async (req, res)=>{
  try{
    const id = req.params.id;   
    await Order.findById(id, (err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        res.status(200).json(detail);
      }
    })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Detail Not Available"
  });
  }
};

exports.deleteorder = async(req, res)=>{
  
  try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success:true,
      message:"Deleted Successfully...!"
    })

  }catch{
    res.status(400).json({
            success: false,
            message: "Not deteleted...!"
        });
  }
};

exports.orderUpdate = async(req, res)=>{
  const id = req.params.id;
  await Order.findOneAndUpdate({_id:id}, req.body, {new:true})
  .then((order)=>{
    res.status(200).json({
      success:true,
      order})
  }).catch((err)=>{
    res.status(200).json({
    sucess:false, 
    err: err.message
  })
  });

};

exports.orderbyUserid = async(req, res)=>{
  try{
    const userid = req.body.userid;
    await Order.find({userid:userid},(err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        console.log(detail)
        res.status(200).json(detail);
      }
    })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }
};



exports.orderbytailor = async (req, res)=>{
  const tailorType = req.body.tailortype;

  try{
    await Order.find({tailortype:tailorType},(err, details)=>{
      if(err){
        res.status(500).json({
          success:false,
          message:"The orders Not availables"
        })
      }else{
        console.log(details)
        res.status(200).json(details)
      }
    });

  }catch{
    res.status(500).json({
      success:false,
      message:"The orders Not availables"
    })

  }

};

