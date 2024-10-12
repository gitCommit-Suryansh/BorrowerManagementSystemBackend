const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');

router
    .post('/registerdailyborrower',authController.registerDailyBorrower)
    .post('/registermonthlyborrower',authController.registerMonthlyBorrower)
    .post('/registerfinanceborrower',authController.registerFinanceBorrower)
    
module.exports = router;