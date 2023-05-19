const express = require('express');
const router = express.Router();
const replyController = require('../controllers/reply.controller');

router.post('/new', replyController.createReply);
router.get('/', replyController.getReplies);
router.delete('/:id', replyController.deleteReply)

module.exports = router;    

