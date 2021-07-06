

const mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    product_name:{
        type: String,
        require: true,
    },
    product_description:{
        type: String,
        require: true,
        strim: true,
        minlength:10,
    },
    product_category:{
        type: String,
        require: true,
    },
    product_uploadby:{
        type: String,
    },
    product_photo:{
        type: String,
        
    }

});

const Product = mongoose.model("Product", ProductSchema) ;
module.exports = Product;