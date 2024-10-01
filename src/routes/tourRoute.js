const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router.post('/create', userController.createUser);

module.exports = router;