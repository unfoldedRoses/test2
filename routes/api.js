const express = require('express');
const router = express.Router();
const apiController = require('../controllers/mainController');

// Add data to the table
router.post('/add', apiController.addData);

// Edit data in the table
router.put('/edit', apiController.editData);

// View data from the table
router.get('/view/:id', apiController.viewData);

// Delete data from the table
router.delete('/delete/:id', apiController.deleteData);

module.exports = router;