const mongoose = require('mongoose');

const connectionDB = async() =>{
   await mongoose.connect("mongodb://localhost:27017/FinalProject",{
       useCreateIndex: true,
       useFindAndModify:true,
       useNewUrlParser:true,
       useUnifiedTopology:true
   });
   console.log("MonogoDB connection Successfully");

}
module.exports  = connectionDB;