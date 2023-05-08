'use strict';

const userProfile = require('../model/userprofile.model');
const {json} = require('body-parser');
const User = require('../model/user.model');

exports.fetchuser = async function(req, res){
    console.log(req.params);

    userProfile.fetchUser(req.params.userid, function(err,user){
        
        if (err) {
            res.send(err);
            
        } else {
            res.json({error:false, data:user});
            
        }
    });

}

exports.updateUser = async function(req, res){
    console.log(req.body);
    console.log(req.params);
    var newUserdata = req.body
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error:true, message: "please fill all the required fields"});
        
    } else {
        userProfile.updateUser(req.params.userid,newUserdata, function(err,user){
            if (err) {
                res.send(err);
                
            } else {
                
                res.json({error:false,message:"updated successfully",data:user});
            }
        })
        
    }
}