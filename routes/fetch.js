const express = require('express');
const router = express.Router();
const fetchController = require('../controller/fetch');

router
    .get('/fetchdailyborrower',fetchController.fetchDailyBorrower)
    .get('/fetchmonthlyborrower',fetchController.fetchMonthlyBorrower)

module.exports = router;