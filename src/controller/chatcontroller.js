const chatModel = require('../model/chatroom.model');

exports.addMessage = function(req,res){
    const newpost = new chatModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'please provide all fields'});        
    } else {
       chatModel.addMessageToDb(newpost,function(err,message){
        if (err) {
            console.log(err);
            res.status(400).send({error:true, message: 'error occured', data: err});
        } else {
            res.json({error: false, message: 'post added successfully', data:message});
        }
       });
        
    }
}

exports.getAllMessages = function(req,res){
    chatModel.getAllMessages(req.query,function(err,message){
        if (err) {
            res.send(err);
        } else {
            
            res.json({error:false, message: "post fetched successfully", data: message})
        }
    })
}