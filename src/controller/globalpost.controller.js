const {json} = require('body-parser');
const globalPost = require('./../model/globalPost.model');

exports.addPost = async function(req, res){
    const new_post = new globalPost(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'lease provide all fields'});        
    } else {
        globalPost.createPost(new_post, function(err,post){
            if (err) {
                res.status(400).send({error:true, message: 'error occured'});
                
            } else {
                res.json({error: false, message: 'post added successfully', data:post});
                
            }
        });
        
    }
}

exports.fetchPost = async function(req,res){
    globalPost.fetchPost(function(err,post){
        if (err) {
            console.log(err);

            
        } else {
            res.json({error: false, message: 'post fetched', data: post});
        }
    });
}

exports.fetchUserPost = async function(req,res){
    console.log(req.params);
    globalPost.fetchUserPost(req.params.userid, function(err,userpost){
        if (err) {
            res.send(err);
        } else {
            res.json({data:userpost});
            
        }
    })
}