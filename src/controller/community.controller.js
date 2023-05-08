const {json} = require('body-parser');
const TrainCommunity = require('../model/community.model');

exports.getAllCommunities = async function(req,res){
    TrainCommunity.getAllCommunities(req,function(err,community){
        if (err) {
           res.status(400).send(err.message);

            
        } else {
            console.log(typeof(community));
            res.json({error: false, message: 'post fetched', data: community[0]});
        }
    })
}

exports.createCommunity = function(req,res){
    var newCommunity = new TrainCommunity(req.body);
    TrainCommunity.createCommunity(newCommunity, function(err,community){
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "community created successfully"})
            
        }
    })
}

exports.addReview = function(req,res){
    
}

