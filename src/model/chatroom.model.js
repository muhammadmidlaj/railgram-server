const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var ChatModel = function (message) {
    this.message_id = uuidv4();
    this.user_id = message.user_id;
    this.username = message.username;
    this.community_id = message.community_id;
    this.createdat;
    this.message = message.message;
    this.messageType = message.messageType;
    
};

ChatModel.addMessageToDb = function(message,result){
    DBconnection.query("INSERT INTO chatroom_messages SET?",message,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }  
    });
}

ChatModel.getAllMessages = function(req,result){
    DBconnection.query("CALL GET_MESSAGES_FOR_CHATROOM(?)",[req.community_id],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }   
    });
}

module.exports = ChatModel;

