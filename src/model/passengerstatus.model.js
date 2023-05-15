const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var PassengerStatus = function(passenger){
    this.id = uuidv4();
    this.Pnr = passenger.Pnr;
    this.Number = passenger.Number;
    this.Coach= passenger.Coach;
    this.Berth= passenger.Berth;
    this.BookingStatus= passenger.BookingStatus;
    this.CurrentStatus= passenger.CurrentStatus;
    this.CoachPosition= passenger.CoachPosition;
    this.BookingBerthNo= passenger.BookingBerthNo;
    this.BookingCoachId= passenger.BookingCoachId;
   
    this.BookingStatusNew= passenger.BookingStatusNew;
    this.CurrentCoachId= passenger.CurrentCoachId;
    this.BookingBerthCode= passenger.BookingBerthCode;
    this.CurrentBerthCode= passenger.CurrentBerthCode;
    this.CurrentStatusNew= passenger.CurrentStatusNew;
    this.userid= passenger.userid;
}


PassengerStatus.addToDb = function(passenger,result){
    DBconnection.query("INSERT INTO passengerstatus SET?",passenger,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}

PassengerStatus.getPassengerOnPnr = function(passenger,result){
    DBconnection.query("select * from passengerstatus where Pnr = ?",passenger.Pnr,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}

PassengerStatus.getPassengerCount = function(pnr,result){
    DBconnection.query("select count(Pnr) from passengerstatus where Pnr = ?",pnr.Pnr,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}

PassengerStatus.getPassengerDetailsForUser = function(pnr,result){
    DBconnection.query("call GET_PASSENGER_DETAILS_FOR_USER(?,?)",[pnr.Pnr,pnr.userid],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}






module.exports = PassengerStatus;