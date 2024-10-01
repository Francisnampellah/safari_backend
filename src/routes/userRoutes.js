const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContoller.ts/userController');

router.get('/getAll', userController.getAllUsers);
router.post('/create', userController.createUser);

module.exports = router;