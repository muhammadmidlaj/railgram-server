const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');
const moment = require('moment');

var PnrModel = function(PnrData){
    this.id = uuidv4();
    this.Pnr = PnrData.Pnr;
    this.TrainNo = PnrData.TrainNo;
    this.TrainName = PnrData.TrainName;
    this.Doj = new Date(PnrData.Doj) ;
    this.BookingDate = new Date(PnrData.BookingDate) ;
    this.Quota = PnrData.Quota;
    this.DestinationDoj = new Date(PnrData.DestinationDoj) ;
    this.SourceDoj = new Date(PnrData.SourceDoj) ;
    this.From = PnrData.From;
    this.To = PnrData.To;
    this.ReservationUpto  = PnrData.ReservationUpto;
    this.BoardingPoint = PnrData.BoardingPoint;
    this.Class = PnrData.Class;
    this.ChartPrepared = PnrData.ChartPrepared;
    this.BoardingStationName = PnrData.BoardingStationName;
    this.TrainStatus = PnrData.TrainStatus;
    this.TrainCancelledFlag = PnrData.TrainCancelledFlag;
    this.ReservationUptoName = PnrData.ReservationUptoName;
    this.PassengerCount = PnrData.PassengerCount; 
    this.DepartureTime = PnrData.DepartureTime;
    this.ArrivalTime = PnrData.ArrivalTime;
    this.ExpectedPlatformNo = PnrData.ExpectedPlatformNo;
    this.SourceName = PnrData.SourceName;
    this.DestinationName = PnrData.DestinationName;
    this.Duration = PnrData.Duration;
    this.FromDetails = PnrData.FromDetails;
    this.ToDetails = PnrData.ToDetails;
    this.BoardingPointDetails = PnrData.BoardingPointDetails;
    this.ReservationUptoDetails = PnrData.ReservationUptoDetails;
    this.userid = PnrData.userid;
}



//PNRDATA MODELS STARTS

PnrModel.create = function(pnrdata,result){
    DBconnection.query("INSERT INTO pnrdata set?",pnrdata,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}

PnrModel.getPnrForVerification = function(pnr,result){
    DBconnection.query("select Pnr,PassengerCount from pnrdata where Pnr = ? ",pnr.Pnr,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
} 

PnrModel.getPnr = function(details,result){
    DBconnection.query("call GET_PNR_DETAILS(?,?);",[details.Pnr,details.userid],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }

    });
}

PnrModel.deletePnrDetails = function(pnr,result){
    DBconnection.query("call PNR_EXPIRED(?,?);",[pnr.Pnr,pnr.userid],function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }

    });
}

//PNRDATA MODELS ENDS

//PASSENGER STATUS STARTS

module.exports = PnrModel;


