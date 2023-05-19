const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/question.controller');

router.get('/:questionId', QuestionController.searchQuestion)
router.get('/user/:userId', QuestionController.searchQuestionByUserId)
router.post('/new', QuestionController.createQuestion);
router.delete('/:id', QuestionController.deleteQuestion)

module.exports = router;    

