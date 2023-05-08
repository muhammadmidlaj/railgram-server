'use strict';

const express = require('express');
const authentication = require('../middleware/authentication');

const postRouter = express.Router();

const globalPostcontroller = require('../controller/globalpost.controller');
const router = require('./user.routes');

postRouter.post('/createpost', globalPostcontroller.addPost);

postRouter.get('/getpost',authentication,globalPostcontroller.fetchPost);

postRouter.get('/getuserpost/:userid',authentication,globalPostcontroller.fetchUserPost);

module.exports = postRouter;