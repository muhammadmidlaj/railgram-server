const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var report = function(report){
    this.reportid = uuidv4(),
    this.userid = report.userid,
    this.postid = report.postid,
    this.type = report.type,
    this.description = report.description
    this.createdat;
}

report.createReport = function(newReport,result){
    DBconnection.query("INSERT INTO reports set?",newReport,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

report.getReports = function(result){
    DBconnection.query("call GET_ALL_REPORTS()",function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    });
}


module.exports = report;
