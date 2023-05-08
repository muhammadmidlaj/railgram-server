const mysql = require('mysql');

//creates a mysql connection
const dbConn = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root',
    database : 'railgram',
});

dbConn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Database Connected");
    }
});

module.exports = dbConn;