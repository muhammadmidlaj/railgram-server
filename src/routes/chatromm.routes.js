const express = require('express');
const chatController = require('../controller/chatcontroller');
const authentication = require('../middleware/authentication');

const chatRouter = express.Router();
chatRouter.post('/addMessages',chatController.addMessage);
chatRouter.get('/getAllMessages',chatController.getAllMessages);

module.exports = chatRouter;
