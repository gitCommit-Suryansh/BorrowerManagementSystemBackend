const express = require('express');
const router = express.Router();
const installmentController = require('../controller/installment');

router
    .post('/adddailyinstallment',installmentController.addDailyInstallment)
    .post('/addmonthlyinstallment',installmentController.addMonthlyInstallment)
    .get('/fetchinstallment',installmentController.fetchInstallment)

module.exports = router;