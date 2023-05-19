const db = require('../models');
const query = require('../services/queries')
const Question = db.question;

const createQuestion = async (req, res) => {
    const newQuestion = await query.create(Question, req.body);
    res.send(newQuestion)
}

const searchQuestion = async (req, res) => {
    console.log(req.params);
    const question = await query.search(Question, req.params);
    res.send(question)
}

const searchQuestionByUserId = async (req, res) => {
    const question = await query.search(Question, req.params);
    res.send(question)
}

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
    searchQuestionByUserId
}

