const express = require('express');
const authentication = require('../middleware/authentication');

const pnrRouter = express.Router();

const pnrDatacontroller = require('../controller/pnrverifieddata.controller');

pnrRouter.post('/addPnrData',pnrDatacontroller.addPnrData);
pnrRouter.get('/getPnrData',pnrDatacontroller.getVerifiedPnrData);

module.exports = pnrRouter;