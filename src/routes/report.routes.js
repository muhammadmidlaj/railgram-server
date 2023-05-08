const express = require('express');
const reportController = require('../controller/report.controller');
const authentication = require('../middleware/authentication');

const reportRouter = express.Router();

reportRouter.post("/addReport",reportController.addReport);
reportRouter.get('/getReports',reportController.getReports);

module.exports = reportRouter;