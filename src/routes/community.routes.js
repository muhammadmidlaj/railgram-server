const express = require('express');
const authentication = require('../middleware/authentication');

const communityRouter = express.Router();

const CommunityController = require('../controller/community.controller');

communityRouter.get('/getAllCommunities',CommunityController.getAllCommunities);
communityRouter.post('/createCommunity',CommunityController.createCommunity);

module.exports = communityRouter;