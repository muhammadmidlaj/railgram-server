const post = require('../model/post.model');
const postModel = require('../model/post.model');

exports.createPost = function(req,res){
    const newpost = new postModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'please provide all fields'});        
    } else {
       postModel.createPost(newpost,function(err,post){
        if (err) {
            res.status(400).send({error:true, message: 'error occured'});
        } else {
            res.json({error: false, message: 'post added successfully', data:post});
        }
       });
        
    }
}

exports.getPostForHomeFeed = function(req,res){
    postModel.getPostForHomeFeed(function(err,post){
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "post fetched successfully", data: post})
        }
    })
}

exports.getCommunityPost = function(req,res){
    postModel.getCommunityPost(req.query,function(err,post){
        if (err) {
            res.send(err);
        } else {
            res.json({error:false, message: "post fetched successfully", data: post})
        }
    })
}

exports.fetchUserPost = async function(req,res){
    console.log(req.params);
    postModel.fetchUserPost(req.query, function(err,userpost){
        if (err) {
            res.send(err);
        } else {
            res.json({error:false, message: "post fetched successfully",data:userpost});
            
        }
    })
}

exports.deletePost = function (req,res) {
    postModel.deletePost(req.query,function(err,message){
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.json({error:false, message: "post deleted successfully", data: message})
        }
    })
    
}