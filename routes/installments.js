const express = require('express');
const router = express.Router();
const installmentController = require('../controller/installment');

router
    .post('/adddailyinstallment',installmentController.addDailyInstallment)
    .post('/addmonthlyinstallment',installmentController.addMonthlyInstallment)
    .get('/fetchdailyinstallment',installmentController.fetchDailyInstallment)
    .get('/fetchmonthlyinstallment',installmentController.fetchMonthlyInstallment)
    .post('/adddailyborrowerdiscount',installmentController.addDailyBorrowerDiscount)
    .post('/addmonthlyborrowerdiscount',installmentController.addMonthlyBorrowerDiscount)
    .post('/principlerepayment',installmentController.principlerepayment)

module.exports = router;