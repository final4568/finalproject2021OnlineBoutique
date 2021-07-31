
const Order = require("../models/Order");
const sendEmail = require("../utils/sendemail");


exports.orderadd = async (req, res)=>{
    const { productname, productid, userid, username, productimage, name,
    usergmail, gmail, phone, quantity, chest, shirtlength, sleevlength,
    sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
    hip, thigh, knee, legopening, suitsize,tailodate, clientdate,useraddress, 
    tailortype,producttype, productcategory, orderprogress,orderstatus,
    collercolor, collerid, bodyid, bodycolor, coller,shirtbody, pocket,pocketid,
    pocketcolor, arm, armcolor, armid, buttoncolor, phati,
    phatiid, phaticolor, leftcoff, leftcoffid, leftcoffcolor, 
    righttcoff, righttcoffid, righttcoffcolor
    } = req.body;
    try {
      const order = await Order.create({
        productname, productid, userid, username, productimage,name,
        usergmail, gmail, phone, quantity, chest, shirtlength, sleevlength,
        sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
        hip, thigh, knee, legopening, suitsize, clientdate,tailodate, useraddress, 
        tailortype, producttype, productcategory,orderprogress, orderstatus,
        collercolor, collerid, bodyid, bodycolor,coller, shirtbody, pocket,pocketid,
        pocketcolor, arm, armcolor, armid,phati,phatiid, phaticolor,buttoncolor, leftcoff, 
        leftcoffid, leftcoffcolor, 
        righttcoff, righttcoffid, righttcoffcolor
      }).then((response)=>{

        res.status(200).send(response)

        const resetUrl = `http://localhost:3000/tailor/dashboard`;   
        var email;
        
        if(tailortype == "Male"){
          email="usama.razzaq.gmc@gmail.com";
          sendEmail({
            to:email,
            subject: `Recived New Male Order For ${username}`,
            text: `<h1>Hi, You have recived New Male Order</h1>
            <p> Please Check Your Dashboard And The UserEmail: ${usergmail} </p> 
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `,
          });
          res.status(200).json({
            success: true,
            data: "Email send successfully...! Check Your Email",
          });
        }else if(tailortype == "Female"){
          email="well.wish.gmc@gmail.com";
          sendEmail({
            to:email,
            subject: `Recived New Male Order For ${username}`,
            text: `<h1>Hi, You have recived New Order</h1>
            <p> Please Check Your Dashboard  And The UserEmail: ${usergmail} </p> 
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `,
          });
          res.status(200).json({
            success: true,
            data: "Email send successfully...! Check Your Email",
          });
        }
        

      
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
    }).sort({ _id: -1 })
};



exports.getsingleoder = async (req, res)=>{
  try{
    const id = req.params.id;   
    await Order.findById(id, (err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        })
      }else{
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 });
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
        })
      }else{
        // console.log(detail)
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 });
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }
};


exports.customorderbyuser = async(req, res)=>{
  try{
    const userid = req.body.userid;
    const producttype = req.body.producttype;
    await Order.find({userid:userid, producttype:producttype},(err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        // console.log(detail)
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }
};


exports.customorderbyuserPN = async(req, res)=>{
  try{
    const userid = req.body.userid;
    const producttype = req.body.producttype;
    const productname = req.body.productname;
    await Order.find({userid:userid, producttype:producttype, productname:productname},(err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        // console.log(detail)
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }
};


exports.orderbytailor = async (req, res)=>{
  const tailortype = req.body.tailortype;
  const producttype = req.body.producttype;
  try{
   

    await Order.find({tailortype:tailortype, producttype:producttype},(err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        // console.log(detail)
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }

};


exports.customorderbytailorMF = async (req, res)=>{
  const tailortype = req.body.tailortype;
  const producttype = req.body.producttype;
  const productname = req.body.productname;
  try{
   

    await Order.find({tailortype:tailortype, producttype:producttype, productname:productname},(err, detail)=>{
      if(err){
          res.status(500).json({
          success:false,
        });
      }else{
        // console.log(detail)
        res.status(200).json(detail);
      }
    }).sort({ _id: -1 })
  }catch{
    res.status(400).json({
      success: false,
      message: "Order Data Not Found"
  });
  }

};







exports.getorderbyproducttype = async (req, res)=>{
  const producttype = req.body.producttype;

  try{
    await Order.find({producttype:producttype}, (err, details)=>{
      if(err){
        res.status(500).json({
          success:false,
          message:"The orders Not availables"
        })
      }else{
        // console.log(details)
        res.status(200).json(details)
      }
    }).sort({ _id: -1 });

  }catch{
    res.status(500).json({
      success:false,
      message:"The orders Not availables"
    })

  }
};


exports.getorderbyproducttypePN = async (req, res)=>{
  const producttype = req.body.producttype;
  const productname = req.body.productname;

  try{
    await Order.find({producttype:producttype, productname:productname}, (err, details)=>{
      if(err){
        res.status(500).json({
          success:false,
          message:"The orders Not availables"
        })
      }else{
        res.status(200).json(details)
      }
    }).sort({ _id: -1 });

  }catch{
    res.status(500).json({
      success:false,
      message:"The orders Not availables"
    })

  }
};
