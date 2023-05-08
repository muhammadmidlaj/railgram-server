const DBconnection = require('../../config/db.config');
const uuidv4 = require('uuid-v4');

var review = function(review){
    this.reviewid = uuidv4();
    this.userid = review.userid;
    this.rating = review.rating;
    this.communityid = review.trainno;
}


review.addReview = function (review,result) {
    console.log(review);
    DBconnection.query("INSERT INTO reviews SET? ", review,function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
        }
    })
    
}

review.getAllReviews = function(trainno,result){ 
    DBconnection.query("call GET_ALL_REVIEWS(?)",trainno.trainno, function(err,res){
        if (err) {
            result(err,null);
        } else {
            result(null,res);
            
        }
    })
}

module.exports = review;