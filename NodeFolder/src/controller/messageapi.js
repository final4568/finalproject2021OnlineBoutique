const Message = require("../models/Message");


exports.addmessages = async(req, res)=>{
 const newMessage = new Message(req.body)
 try{
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage)
 }catch(err){
    res.status(500).json(err);
 }
};

exports.getmessages = async(req, res)=>{
    try{
        const messages = await Message.find({
            conversationid: req.params.conversationid,
        })
        res.status(200).json(messages)
    }catch(err){
        res.status(500).json(err);
    }
};