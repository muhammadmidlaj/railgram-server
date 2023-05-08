'use strict';
const exoress = require('express');
const pnrrouter = exoress.Router();
const pnrcontrol = require('../controller/pnrcontroller');


pnrrouter.get('/:pnrno', pnrcontrol.getPnrDetails);

module.exports = pnrrouter;

