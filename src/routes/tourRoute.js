const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour/tourContoller');

router.post('/create', tourController.registerTour);

module.exports = router;
