const report = require('../model/report.model');

exports.addReport = function(req,res){
    const newReport = new report(req.body) ;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'please provide all fields'});        
    } else {
        report.createReport(newReport,function(err,report){
            if (err) {
                res.status(400).send({error:true, message: 'error occured' , err: err});
            } else {
                res.json({error: false, message: 'reported to admin', data:report});
            }
        });
    }
}

exports.getReports = function(req,res){
    report.getReports(function(err,reports){
        if (err) {
            res.status(400).send({error:true, message: 'error occured' , err: err});
        } else {
            res.json({error: false, message: 'reported fetched successfully', data:reports});
        }
    });
}
exports.getDataForAdmin = function(req,res){
    report.getDataForAdmin(function(err,counts){
        if (err) {
            res.status(400).send({error:true, message: 'error occured' , err: err});
        } else {
            res.json({error: false, message: 'reported fetched successfully', data:counts});
        }
    });
}
