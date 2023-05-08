 'use strict'

 const dbconn = require('../../config/db.config');

 var userProfile = function(userdetails){
    this.id = userdetails.userid,
    this.username = userdetails.username,
    this.firstname = userdetails.firstname,
    this.lastname = userdetails.lastname,
    this.profileimgurl = userdetails.profileimgurl,
    this.coverimgurl = userdetails.coverimgurl,
    this.email = userdetails.email,
    this.phonenumber = userdetails.phonenumber

 };

 //get user details
 userProfile.fetchUser = function(userid,result){
    dbconn.query('select * from userprofile where userid=?',userid,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
            
        }
    });
 }

 //update user details
userProfile.updateUser = function(id,user,result){
    dbconn.query("UPDATE userprofile SET firstname = ?,lastname = ?,profileimgurl = ?,coverimgurl = ?,phonenumber = ? WHERE userid = ?",[
        user.firstname,user.lastname,user.profileimgurl,user.coverimgurl,user.phonenumber,id
    ],function(err,res){
        if (err) {
            result(null,err);
        } else {
            result(res.null);
            
        }
    });
}


 module.exports = userProfile;