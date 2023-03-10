const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/:title', postController.searchPost,)
router.post('/new', postController.createPost);
router.delete('/:id', postController.deletePost)

module.exports = router;    
