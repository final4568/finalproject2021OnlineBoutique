


const ConversationModel = require("../models/ConversationModel");

exports.Conversationadd = async(req, res)=>{
 const newconversation = new ConversationModel({
    members:[ req.body.senderId, req.body.receiverId]
 });

 try{
    const savedconversation = await newconversation.save();
    res.status(200).json(savedconversation);

 }catch(err){
    res.status(500).json(err)
 }

};


exports.getconversation = async (req, res)=>{
    try{
        const conversation = await ConversationModel.find({
            members:{ $in: [req.params.userid]},
        })
        res.status(200).json(conversation)
    }catch(err){
        res.status(500).json(err)
    }
}