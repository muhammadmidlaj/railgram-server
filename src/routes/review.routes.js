const express = require('express');
const reviewController = require('../controller/review.controller');
const authentication = require('../middleware/authentication');

const reviewRouter = express.Router();

reviewRouter.post('/addreview',reviewController.addReview);
reviewRouter.get('/getreview',reviewController.getReview);


module.exports = reviewRouter;