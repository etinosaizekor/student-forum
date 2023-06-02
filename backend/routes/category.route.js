const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/', categoryController.getAllCategory);
router.post('/new', categoryController.createCategory);

module.exports = router;    

