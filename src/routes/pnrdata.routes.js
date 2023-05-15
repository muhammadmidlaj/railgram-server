const express = require('express');
const pnrDataController = require('../controller/pnrdata.controller');
const authentication = require('../middleware/authentication');

const pnrDataRouter = express.Router();

pnrDataRouter.post('/addPnrdata',pnrDataController.addPnrData);
pnrDataRouter.get('/getPnrDetails',pnrDataController.getPnrData);
pnrDataRouter.get('/getPnrForVerification',pnrDataController.getPnrForVerification);
pnrDataRouter.delete('/deletePnrDetails',pnrDataController.deletePnrDetails);


pnrDataRouter.post('/addPassengerDetails',pnrDataController.addPassengerStatus);
pnrDataRouter.get('/getPassengerOnPnr',pnrDataController.getPassengerOnPnr);
pnrDataRouter.get('/getPassengerCount',pnrDataController.getPassengerCount);
pnrDataRouter.get('/getPassengerDetailsForUser',pnrDataController.getPassengerDetailsForUser);

pnrDataRouter.get('/getApitestData',pnrDataController.getApiTestData);

module.exports = pnrDataRouter;