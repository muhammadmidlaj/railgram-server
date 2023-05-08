const dbconn = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var TrainCommunity = function (traindetails) {
    this.communityid  = uuidv4();
    this.train_number = traindetails.train_number;
    this.train_name = traindetails.train_name;
    this.train_profileurl = traindetails.train_profileurl;
};

TrainCommunity.getAllCommunities = function(req,result){
    
    dbconn.query('call GET_ALL_COMMUNITIES', function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);

        }
    })


}

//creating a new community
TrainCommunity.createCommunity = function(community,result){
    dbconn.query("INSERT into train_community set?",community,function(err,res){
        if(err){
            result(err,null);

        }else{
            result(null,res);
        }
    })
}


//adding review to the data base


module.exports = TrainCommunity;