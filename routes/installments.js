const express = require('express');
const router = express.Router();
const installmentController = require('../controller/installment');

router
    .post('/adddailyinstallment',installmentController.addDailyInstallment)
    .post('/addmonthlyinstallment',installmentController.addMonthlyInstallment)
    .post('/addfinanceinstallment',installmentController.addFinanceInstallment)
    .get('/fetchdailyinstallment',installmentController.fetchDailyInstallment)
    .get('/fetchmonthlyinstallment',installmentController.fetchMonthlyInstallment)
    .get('/fetchfinanceinstallment',installmentController.fetchFinanceInstallment)
    .post('/adddailyborrowerdiscount',installmentController.addDailyBorrowerDiscount)
    .post('/addmonthlyborrowerdiscount',installmentController.addMonthlyBorrowerDiscount)
    .post('/principlerepayment',installmentController.principlerepayment)

module.exports = router;