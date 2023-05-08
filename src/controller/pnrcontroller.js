const {json} = require('body-parser');
const pnrdetails = require('../model/pnrmodel');

exports.getPnrDetails = function(req,res){
    pnrdetails.getPnrDetails(req.params.pnrno,function(err,pnr){
        if (err) {
            res.send(err);
        } else {
            res.json({error: false , data: pnr});
        }
    })
}