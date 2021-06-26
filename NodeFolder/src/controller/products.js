
const multer = require("multer");
const { findById } = require("../models/Product");
const Product = require("../models/Product");

const multerConfig = multer.diskStorage({
    destination:(req, file,callback)  =>{
        callback(null, 'public/images');
    },
    filename:(req, file , callback) =>{
        // const ext = file.mimetype.split('/')[1];
        // `image=${Date.now()}.${ext}`
        callback(null,file.originalname );
    }
});

const isImage = (req, file, callback) =>{
    if(file.mimetype.startsWith('image')){
        callback(null, true);
    }else{
        callback(new Error("Only Image Is Allowd...!"))
    }
}
const upload = multer({
   storage: multerConfig,
   fileFilter:isImage,
});
exports.uploadImage = upload.single('product_photo');
exports.upload = (req, res)=>{
    console.log(req.file);
    const uploadproduct = new Product({        
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_category: req.body.product_category,
        product_uploadby:req.body.product_uploadby,
        product_photo: req.file.originalname,
    });
    
    uploadproduct.save().then(()=>{
        res.status(200).json({
            success: true,
            message:"Upload Imgae successfully...!"
        })
    }).catch(()=>{
        res.status(400).json({
            success: false,
            message:" Image Not successfully Uploaded"
        })
    });
   
};

exports.update = (req, res)=>{
    Product.findById(req.params.id).then((product)=>{
        product.product_name = req.body.product_name,
        product.product_description = req.body.product_description,
        product. product_category = req.body.product_category,
        product. product_uploadby =req.body.product_uploadby,
        product. product_photo =  req.file.originalname,
        
        product.save().then(()=>{
        res.status(200).json({
        success: true,
        message:"Product Updated successfully...!"
        })
    })
    }).catch((error)=>{
        res.status(400).json({
        success: false,
        error: error.message,
        })
    });
};
    

exports.getallproducts =  (req, res)=>{
     Product.find((err, docs)=>{
        if (err) {
          console.log(err);
        } else {
          res.json(docs);
        }
    });
};


exports.deleteproduct = async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "deteleted...!"
          });
    }catch{
        res.status(400).json({
            success: false,
            message: "Not deteleted...!"
        });
    }
};

exports.productdetail = async (req, res)=>{
    try{
        await Product.findById(req.params.id, (err, product)=>{
            if(err){
                res.status(500).json({
                    success:false,
                  });
            }else{
                res.status(200).json(product)
            }
        });
    }catch{
        res.status(400).json({
            success: false,
            message: "Product Not Available"
        });
    }
};