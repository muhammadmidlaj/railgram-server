'use strict';

const express = require('express');
const userprofilecontroller = require('../controller/userprofile.controller');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.get('/:userid',authentication,userprofilecontroller.fetchuser);
router.put('/updateuser/:userid',authentication,userprofilecontroller.updateUser);

module.exports = router;