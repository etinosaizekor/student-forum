const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.post('/new', commentController.createComment);
router.get('/', commentController.getAllComments)
router.delete('/:id', commentController.deleteComment)

module.exports = router;    

