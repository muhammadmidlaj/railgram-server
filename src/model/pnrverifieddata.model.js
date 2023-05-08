var dbConn = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var PnrData = function(pnrdata){
    this.id = uuidv4();
    this.Pnr = pnrdata.Pnr;
    this.TrainNo = pnrdata.TrainNo;
    this.TrainName = pnrdata.TrainName;
    this.SourceDoj = pnrdata.SourceDoj;
    this.DestinationDoj = pnrdata.DestinationDoj;
    this.BookingDate = pnrdata.BookingDate;
    this.From = pnrdata.From;
    this.To = pnrdata.To;
    this.DepartureTime = pnrdata.DepartureTime;
    this.ArrivalTime = pnrdata.ArrivalTime;
    this.userid = pnrdata.userid;
}

PnrData.addPnrDetails = function(pnrdata , result){
    dbConn.query('insert into pnrverifieddata set?',pnrdata,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })

};

PnrData.getVerifiedPnrData = function(pnrno,result){
    dbConn.query("call GET_VERIFIED_PNRDATA(?,?)",[pnrno.pnrno,pnrno.userid],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

module.exports = PnrData;