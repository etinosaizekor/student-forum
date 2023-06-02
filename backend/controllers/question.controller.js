const db = require('../models');
const query = require('../services/queries')
const Question = db.question;

const createQuestion = async (req, res) => {
    const newQuestion = await query.create(Question, req.body);
    res.send(newQuestion)
}

const getAllQuestions = async (req, res) => {
  const allQuestions = await query.getAll(Question)
  res.send(allQuestions);
}

const searchQuestion = async (req, res) => {
    try {
      const criteria = req.params;
      const { sortField, sortOrder, limitValue } = req.query;
  
      const options = {};
  
      if (sortField && sortOrder) {
        options.sortField = sortField;
        options.sortOrder = sortOrder;
      }
  
      if (limitValue) {
        options.limit = limitValue;
      }
  
      const questions = await query.search(Question, criteria, options);
      res.send(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const deleteQuestion = async (req, res) => {
    const delectedRowCount = await query.deleteInstance(Question, req.params);
    if(delectedRowCount[0] == 0){
        res.send("No question was deleted")
    }
    else{
        res.send("Question delected successful")
    }
}

module.exports = {
    createQuestion,
    searchQuestion,
    deleteQuestion,
    getAllQuestions
}

