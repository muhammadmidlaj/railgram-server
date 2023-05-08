const {json} = require('body-parser');
const { addPnrDetails } = require('../model/pnrverifieddata.model');

const PnrData = require('../model/pnrverifieddata.model');

exports.addPnrData = async function(req,res){
    console.log(req.body);
    const pnrData = new PnrData(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});

    }else{
        PnrData.addPnrDetails(pnrData,function(err,pnrData){
            if (err) {
                console.log(err);
                res.status(400).send({error:true, message: 'error occured'});
                
            } else {
                res.json({error: false, message: 'pnr details added successfully'});
                
            }
        })
    }
 }

 exports.getVerifiedPnrData = async function(req,res){

    console.log(req.query);
    PnrData.getVerifiedPnrData(req.query,function(err,pnrdetails){
        if(err) res.send(err);

        res.json({error:false,message: "data fetched  succussfully", data: pnrdetails})
    })
 }