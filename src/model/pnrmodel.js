'use strict';

var dbConn = require('./../../config/db.config');

var Pnr = function (pnr) {
    this.pnrnumber = pnr.pnrnumber;
    this.trainno = user.username;
    this.trainname = user.email;
    this.dateofjourney = user.password;
    this.bookingdate;
    this.boardingpoint;
    this.departuretime;
    this.arrivaltime;
};

Pnr.getPnrDetails = function(pnrno,result){
    dbConn.query('select * from pnrnumber where Pnr = ?',pnrno,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

module.exports = Pnr;