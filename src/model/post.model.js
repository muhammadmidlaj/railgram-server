const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var post = function(post){
    this.postid = uuidv4();
    this.post_title = post.post_title;
    this.post_content = post.post_content;
    this.post_imageurl = post.post_imageurl;
    this.created_at ;
    this.updated_at ;
    this.post_type = post.post_type;
    this.person_uid = post.person_uid;
    this.community_uid = post.community_uid;
}

//create a new post
post.createPost = function(newpost,result){
    DBconnection.query("INSERT INTO posts set?",newpost,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

//getpost for home feed
post.getPostForHomeFeed = function(result){
    DBconnection.query(" call GET_POSTS_FOR_HOME_FEED()",function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

//get post for community
post.getCommunityPost = function(posttype,result){
    DBconnection.query("CALL GET_POST_BY_COMMUNITY(?,?)",[posttype.trainno,posttype.posttype],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
            
        }
    })
}

post.fetchUserPost = function(userid,result){
    console.log(userid.userid);
    DBconnection.query("call GET_POST_BY_USER(?)",userid.userid,function(err,res){
       if (err) {
        result(err,null);
       } else {
        result(null,res);
       } 
    })
}

post.deletePost = function(postid,result){
    DBconnection.query("DELETE from posts where postid = ?",[postid.postid],function(err,res){
        if (err) {
            result(err,null);

        }else{
            result(null,res);
        }
    })
}

post.getSinglePost = function(postid,result){
    DBconnection.query("select * from posts where postid = ?",[postid.postid],function(err,res){
        if (err) {
            result(err,null);

        }else{
            result(null,res);
        } 
    })
}

post.getGeneralPostWithImages = function(arg,result){
    
}
 

module.exports = post;