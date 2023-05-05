const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.post('/login', userController.findUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUserDetail)   

module.exports = router;    