const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router
  .get('/seed', userCtrl.sendDatasUserToMoongoose)
  .post('/signin', userCtrl.login)
  .post('/register',userCtrl.register)


module.exports = router;