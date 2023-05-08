const express = require('express');
const postController = require('../controller/post.controller');
const authentication = require('../middleware/authentication');

const postrouter = express.Router();

postrouter.post('/create-post',postController.createPost);
postrouter.get('/getPostbycommunity',postController.getCommunityPost);
postrouter.get('/getPostForHomeFeed',postController.getPostForHomeFeed);
postrouter.get('/getUserPost',postController.fetchUserPost);
postrouter.delete('/deletePost',authentication,postController.deletePost);

module.exports = postrouter;