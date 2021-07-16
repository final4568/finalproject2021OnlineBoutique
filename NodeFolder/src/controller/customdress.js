


const CustomManModel = require("../models/Customorder");

exports.save = async(req, res)=>{
    // res.send("this is the custome order save Api");

    const{collerid, collercolor, bodyid, bodycolor,
        productname, productcategory}= req.body;
    try{
        const customManModel = await CustomManModel.create({
            collerid,collercolor, bodyid, bodycolor,productname, productcategory
        }).then((response)=>{
            res.status(200).send(response)
        });

    }catch(error){
        res.status(400).json({
            success:false,
            message:"Model Not Save "
        })
    }
};


exports.getmodelproperties = (req,res)=>{
    try{
        const id = req.params.id
        CustomManModel.findById(id, (err, model)=>{
          res.json(model)
        });
      }catch{
        res.status(400).json({
        success: false,
        message: "Person's Profile Not Available"
        });
      }
};