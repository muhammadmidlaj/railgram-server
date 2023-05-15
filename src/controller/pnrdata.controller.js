const PnrModel = require('../model/pnrdata.model');
const PassengerModel = require('../model/passengerstatus.model');

exports.addPnrData = function(req,res){
    var pnrdata = new PnrModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'please provide all fields'});        
    } else {
       PnrModel.create(pnrdata,function(err,pnr){
        if (err) {
            res.status(400).send({error:true, message: 'error occured' , err : err});
        } else {
            res.json({error: false, message: 'pnr details added successfully', data:pnr});
        }
       });
        
    }
}

exports.addPassengerStatus = function(req,res){
  var passenger = new PassengerModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({error: true, message: 'please provide all fields'});        
  } else {
     PassengerModel.addToDb(passenger,function(err,passenger){
      if (err) {
          res.status(400).send({error:true, message: 'error occured' , err : err});
      } else {
          res.json({error: false, message: 'passenger details added successfully', data:passenger});
      }
     });
      
  }
}

exports.getPassengerOnPnr = function(req,res){
  PassengerModel.getPassengerOnPnr(req.query,function(err,passenger){
    if (err) {
      res.status(400).send({error:true, message: 'Pnr note available' , err : err});
  } else {
      res.json({error:false, message: "Passenger details fetched successfully", data: passenger});
  }
  });
}
exports.getPassengerCount = function(req,res){
  PassengerModel.getPassengerCount(req.query,function(err,passenger){
    if (err) {
      res.status(400).send({error:true, message: 'Pnr note available' , err : err});
  } else {
      res.json({error:false, message: "Passenger details fetched successfully", data: passenger});
  }
  });
}

exports.getPassengerDetailsForUser = function(req,res){
  PassengerModel.getPassengerDetailsForUser(req.query,function(err,passenger){
    if (err) {
      res.status(400).send({error:true, message: 'Pnr note available' , err : err});
  } else {
      res.json({error:false, message: "Passenger details fetched successfully", data: passenger});
  }
  });
}




exports.getPnrForVerification = function(req,res){
  PnrModel.getPnrForVerification(req.query,function(err,pnr){
    if (err) {
      res.status(400).send({error:true, message: 'Pnr note available' , err : err});
  } else {
      res.json({error:false, message: "Pnr details fetched successfully", data: pnr});
  }
  });
}

exports.getPnrData = function(req,res){
    PnrModel.getPnr(req.query,function(err,pnr){
        if (err) {
            res.send(err);
        } else {
            res.json({error:false, message: "Pnr details fetched successfully", data: pnr})
        }
    })
}

exports.deletePnrDetails = function(req,res){
  PnrModel.deletePnrDetails(req.query,function(err,pnr){
      if (err) {
          res.send(err);
      } else {
          res.json({error:false, message: "Pnr details deleted successfully", data: pnr})
      }
  })
}

exports.getApiTestData = function(req,res){
    res.json({
        "status": true,
        "message": "Success",
        "timestamp": 1683856279212,
        "data": {
          "Pnr": "6219257941",
          "TrainNo": "13025",
          "TrainName": "HWH BPL EXPRESS",
          "Doj": "08-05-2023",
          "BookingDate": "05-05-2023",
          "Quota": "GN",
          "DestinationDoj": "09-05-2023",
          "SourceDoj": "08-05-2023",
          "From": "HWH",
          "To": "BPL",
          "ReservationUpto": "BPL",
          "BoardingPoint": "HWH",
          "Class": "SL",
          "ChartPrepared": true,
          "BoardingStationName": "Kolkata Howrah Junction",
          "TrainStatus": "Train has Departed, Booking not allowed",
          "TrainCancelledFlag": false,
          "ReservationUptoName": "Bhopal Junction",
          "PassengerCount": 1,
          "PassengerStatus": [
            {
              "Pnr": null,
              "Number": 1,
              "Prediction": null,
              "PredictionPercentage": null,
              "ConfirmTktStatus": null,
              "Coach": "S9",
              "Berth": 23,
              "BookingStatus": "GNWL  36",
              "CurrentStatus": "RAC S9 23",
              "CoachPosition": "",
              "BookingBerthNo": "36",
              "BookingCoachId": "",
              "BookingStatusNew": "GNWL",
              "BookingStatusIndex": "0",
              "CurrentBerthNo": "23",
              "CurrentCoachId": "S9",
              "BookingBerthCode": null,
              "CurrentBerthCode": "SL",
              "CurrentStatusNew": "RAC",
              "CurrentStatusIndex": "0"
            }
          ],
          "DepartureTime": "12:35",
          "ArrivalTime": "18:20",
          "ExpectedPlatformNo": "10",
          "BookingFare": "200",
          "TicketFare": "200",
          "CoachPosition": "L SLR A2 A1 B4 B3 B2 B1 S9 S8 S7 S6 S5 S4 S3 S2 S1 GEN GEN CPU",
          "Rating": 3.5,
          "FoodRating": 3.1,
          "PunctualityRating": 3.6,
          "CleanlinessRating": 3.7,
          "SourceName": "KOLKATA",
          "DestinationName": "Bhopal",
          "Duration": "29:45",
          "RatingCount": 60,
          "HasPantry": true,
          "FromDetails": {
            "category": "A1",
            "division": "HWH",
            "latitude": "22.5834126",
            "longitude": "88.3429024",
            "state": "WEST BENGAL",
            "stationCode": "HWH",
            "stationName": "HOWRAH"
          },
          "ToDetails": {
            "category": "A1",
            "division": "BPL",
            "latitude": "23.2554093",
            "longitude": "77.4525961",
            "state": "MADHYA PRADESH",
            "stationCode": "BPL",
            "stationName": "BHOPAL"
          },
          "BoardingPointDetails": {
            "category": "A1",
            "division": "HWH",
            "latitude": "22.5834126",
            "longitude": "88.3429024",
            "state": "WEST BENGAL",
            "stationCode": "HWH",
            "stationName": "HOWRAH"
          },
          "ReservationUptoDetails": {
            "category": "A1",
            "division": "BPL",
            "latitude": "23.2554093",
            "longitude": "77.4525961",
            "state": "MADHYA PRADESH",
            "stationCode": "BPL",
            "stationName": "BHOPAL"
          }
        }
      })
}