const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/:categoryName', categoryController.searchCategory)
router.post('/new', categoryController.createCategory);

module.exports = router;    
