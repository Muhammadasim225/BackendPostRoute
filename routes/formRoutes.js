// formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// POST route to submit form
router.post('/submit', formController.submitForm);

// GET route to download CSV
router.get('/download', formController.getFormDataAsCSV);

module.exports = router;
