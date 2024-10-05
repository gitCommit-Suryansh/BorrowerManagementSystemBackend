const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');

router
    .post('/registerdailyborrower',authController.registerDailyBorrower)
    .post('/registermonthlyborrower',authController.registerMonthlyBorrower)
    
module.exports = router;