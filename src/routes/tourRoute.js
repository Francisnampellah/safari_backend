const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour/tourContoller');

router.post('/create', tourController.registerTour);

router.get('/getAllTours', tourController.getAllTours);
router.get('/getTourById/:id', tourController.getTourById);
router.get('/getToursByUserId/:id', tourController.getToursByUserId);

router.put('/updateTour/:id', tourController.updateTour);
router.delete('/deleteTour/:id', tourController.deleteTourById);



module.exports = router;
