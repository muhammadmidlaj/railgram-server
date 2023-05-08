const express = require('express');
const authentication = require('../middleware/authentication');
const commentrouter = express.Router();

const globalpost_commentController = require('../controller/comment.controller');

commentrouter.post('/addcomment',authentication,globalpost_commentController.addComment);
commentrouter.get('/viewcomment/:postid',authentication,globalpost_commentController.viewComment);


module.exports = commentrouter;