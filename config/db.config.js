const mysql = require('mysql');

//creates a mysql connection
// const dbConn = mysql.createConnection({
//     host : 'localhost',
//     port : '3306',
//     user : 'root',
//     password : 'root',
//     database : 'railgram',
// });
const dbConn = mysql.createConnection({
    host : 'railgram.ckognyj4pqrn.us-east-1.rds.amazonaws.com',
    port : '3306',
    user : 'myusername',
    password : 'mypassword',
    database : 'railgramaws',
});

dbConn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Database Connected");
    }
});

module.exports = dbConn;
