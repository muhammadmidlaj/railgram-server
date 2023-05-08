const globalpost_comment = require('./../model/comment.model');
const {json} = require('body-parser');

exports.addComment = async function(req, res){
    console.log(req.body);
    const comment = new globalpost_comment(req.body);
     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true , nessage:'provide all required fields'});

     } else {
        globalpost_comment.addComment(comment, function(err,comments){
            if (err) {
                res.status(400).send({error:true, message:'error occured'});
            } else {
                res.json({error:false,message: 'comment added',data:comments});
                
            }
        })
        
     }
}

exports.viewComment =  async function(req,res){
    globalpost_comment.viewComment(req.params.postid, function(err,comment){
        if (err) {
            res.send(err);
            
        } else {
            res.json({data:comment});
            
        }
    })
}