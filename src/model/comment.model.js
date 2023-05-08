'use strict'

const dbConn = require('../../config/db.config');

var globalpost_comment = function(comments){
    this.commentid;
    this.userid = comments.userid;
    this.comment = comments.comment;
    this.postid = comments.postid;
    this.createat;
};

globalpost_comment.addComment = function(comment,result){
    dbConn.query("INSERT INTO comments_globalpost set?",comment,function(err,res){
        if (err) {
            result(err,null);
            
        } else {
            result(null,res);
            
        }
    });

}

globalpost_comment.viewComment = function(postid,result){
    dbConn.query("select comments_globalpost.commentid,comments_globalpost.comment,comments_globalpost.created_date,comments_globalpost.postId,userprofile.username,userprofile.profileimgurl from comments_globalpost inner join userprofile on comments_globalpost.userid = userprofile.userid where comments_globalpost.postId =?",postid,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

module.exports = globalpost_comment;