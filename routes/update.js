const express = require('express');
const router = express.Router();
const updateBorrowerController = require('../controller/updateBorrower');

// Change from POST to PUT for updating borrower details
router.put('/:id', updateBorrowerController.updateBorrowerDetails);

module.exports = router;