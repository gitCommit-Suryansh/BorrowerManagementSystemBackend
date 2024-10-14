const express = require('express');
const router = express.Router();
const deleteBorrowerController = require('../controller/deleteBorrower');

router.delete('/:id', deleteBorrowerController.deleteBorrower)