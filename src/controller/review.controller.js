const review = require('../model/review.model');


exports.addReview = function(req,res){
    const newreview = new review(req.body);
    console.log(newreview);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'please provide all fields'});        
    } else {
       review.addReview(newreview,function(err,review){
        if (err) {
            res.status(400).send({error:true, message: 'error occured'});
        } else {
            res.json({error: false, message: 'review added successfully', data:review});
        }
       });
        
    }
}

exports.getReview = function(req,res){
    review.getAllReviews(req.query,function(err,review){
        if (err) {
            res.send(err);
        } else {
            res.json({error:false, message: "review fetched successfully", data: review})
        }
    })
}