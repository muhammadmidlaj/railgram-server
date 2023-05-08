'use strict'

var dbConn = require('./../../config/db.config');

var globalPost = function (post) {
    this.postId;
    this.postTitle = post.postTitle;
    this.postContent = post.postContent;
    this.imageurl = post.imageurl;
    this.postType = post.postType;
    this.userId = post.userId;
    this.date ;

    
};

globalPost.createPost = function(newPost, result){
    dbConn.query("INSERT INTO globalpost set?",newPost, function(err, res){
        if (err) {
            console.log("error :",err);
            result(err,null);
            
        } else {
            console.log(res.insertId);
            result(null, res);
            
        }
    });
}

// globalPost.fetchPost = function(result){
//     dbConn.query("select * from globalpost",function(err,res){
//         if (err) {
//             console.log(err);
//             result(err,null);
//         } else {
//             console.log(res);

//             result(null,res);
//         }
//     })
// }

globalPost.fetchPost = function(result){
    dbConn.query("select userprofile.username,userprofile.profileimgurl,globalpost.postid,globalpost.posttitle,globalpost.postcontent,globalpost.imageurl,globalpost.posttype,globalpost.createat from globalpost inner join userprofile on globalpost.userid=userprofile.userid;",function(err,res){
        if (err) {
            console.log(err);
            result(err,null);
        } else {
            

            result(null,res);
        }
    })
}

globalPost.fetchUserPost = function(userid,result){
    dbConn.query("select userprofile.username,userprofile.profileimgurl,globalpost.postid,globalpost.posttitle,globalpost.postcontent,globalpost.imageurl,globalpost.posttype,globalpost.createat from globalpost inner join userprofile on globalpost.userid=userprofile.userid where globalpost.userId = ?",userid,function(err,res){
       if (err) {
        result(err,null);
       } else {
        result(null,res);
       } 
    })
}


module.exports = globalPost;
