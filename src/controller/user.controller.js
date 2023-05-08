'use strict';
const bcrypt = require('bcrypt');
const {json} = require('body-parser');
const User = require('./../model/user.model');
const jwt = require('jsonwebtoken');

exports.create = async function (req, res) {
    const new_user = new User(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});

    } else {

        const password = new_user['password'];
        const hashedPassword = await bcrypt.hash(password, 8);
        new_user['password'] = hashedPassword;
        User.create(new_user, function (err, user) {
            if (err) { // res.send(err);
                if (err == 'usererror') {
                    res.status(400).send({error: true, message: 'username already used'});
                } else if (err == 'emailexist') {
                    res.status(400).send({error: true, message: 'email id exist'});
                } else {
                    res.send(err);
                }
                // if (err == 'emailexist') {
                //     res.status(400).send({error: true,message: 'email id exist'});

                // }
            } else {

                res.json({error: false, message: "user Added successfully", data: user});


            }
        });

    }
};

exports.login = async function (req, res) {
    console.log(req.body);
    const username = req.body['username'];
    const password = req.body['password'];

    console.log(password);
    console.log(username);
    var getPassword;
    // const user = await User.login(username);
    try {
        User.login(username, async function (err, user) {
            if (err) {
                res.send(err);

            } else {
                if (user.length === 0) {
                    console.log('empty');
                    res.json({error: true, message: "User doesn't exist"})

                } else {
                    getPassword = user[0]['password'];
                    console.log(getPassword);
                    const isMatch = await bcrypt.compare(password, getPassword);

                    if (! isMatch) {
                        res.json({error: true, message: "password is incorrect"});
                    } else {
                        let rep1 = {
                            id : user[0].userid,
                            username : user[0].username,
                            email : user[0].email
                        }
                        let token = jwt.sign(rep1,"secret");
                        // res.json({auth: true , data:user ,token: token});

                        res.json({error: false, message: "login successfull", data: user,token: token});

                        



                    }


                }


            } 


        })

    } catch (error) {
        console.log(error);

    }


}
exports.findByUserName = function (req, res) {
    User.findByUserName(req.params.username, function (err, user) {
        if (err) 
            res.send(err);
        


        res.json(user);

    })
}

exports.findAll = function (req, res) {
    User.findAll(function (err, user) {
        console.log('controller');
        if (err) 
            res.send(err);
        


        console.log('res', user);
        res.send(user);

    });
};
