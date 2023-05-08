'use strict';
const exoress = require('express');
const router = exoress.Router();

const usercontroller = require('../controller/user.controller');

router.post('/signup', usercontroller.create);

router.post('/login', usercontroller.login);

router.get('/',usercontroller.findAll);

router.get('/:username', usercontroller.findByUserName);

module.exports = router;