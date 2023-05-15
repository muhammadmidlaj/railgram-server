'use strict';

var dbConn = require('./../../config/db.config');

var User = function (user) {
    this.id,
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.date
};


// user signup
User.create = function (newUser, result) {
    console.log('this is', newUser);
    console.log(newUser.email);
    console.log(typeof(newUser));

    dbConn.query("select username from userlogin where username=?", newUser.username, function (err, res) {
        if (err) {
            throw err;
        }else{
        console.log(res);

        if (res.length > 0) {
            console.log("user exist");
            console.log(res);
            result('usererror', null);

        } else {
            dbConn.query("select email from userlogin where email=?", newUser.email, function (err, res) {
                if (err) 
                    throw err;
                
                console.log(res);
                if (res.length > 0) {
                    console.log("email exist");
                    result('emailexist', null);
                } else {
                    dbConn.query("INSERT INTO userlogin set?", newUser, function (err, res) {
                        if (err) {
                            console.log("eroor:", err);
                            result(err, null);

                        } else {
                            console.log(res.insertId);
                            result(null, res.insertId);
                            var userprofile = newUser;
                            delete userprofile.password;
                            userprofile.userid = res.insertId;
                            dbConn.query("INSERT INTO userprofile set?", userprofile, function (err, res) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(res);
                                }
                            });

                        }
                    });


                }
            });

        }

    }
    });


};

// user login

User.login = function (username, result) {

    dbConn.query("select * from userlogin where username=?", username, function (err, res) {
        if (err) {

            result(err, null);
        } else {


            result(null, res);

        }
    })
}

User.findByUserName = async function (username, result) {
    dbConn.query("select * from userlogin where username=?", username, function (err, res) {
        if (err) {

            result(err, null);

        } else {
            result(null, res);


        }
    })


}

User.findAll = function (result) {
    dbConn.query("Select * from posts", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};


// error handling

User.userErrorHandle = function (username, emailresult) {
    dbConn.query("select ")

}

module.exports = User;
