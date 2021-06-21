
const multer = require("multer");
const Product = require("../models/Product");

const multerConfig = multer.diskStorage({
    destination:(req, file,callback)  =>{
        callback(null, 'public/');
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

exports.getallproducts=(req, res)=>{
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