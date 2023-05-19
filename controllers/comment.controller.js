const db = require('../models');
const query = require('../services/queries')
const Comment = db.comment;

const createComment = async (req, res) => {
    const newComment = await query.create(Comment, req.body);
    res.send(newComment)
}

const getAllComments = async(req, res) => {
    const allComments = await query.getAll(Comment)
    res.send(allComments);
}

    
const searchComment = async (req, res) => {
    const comment = await query.search(Comment, req.params);
    res.send(comment)
}

const deleteComment = async (req, res) => {
    const delectedRowCount = await query.deleteInstance(Comment, req.params);
    if(delectedRowCount[0] == 0){
        res.send("No comment was deleted")
    }
    else{
        res.send("Comment delected successful")
    }
}

module.exports = {
    createComment,
    searchComment,
    getAllComments,
    deleteComment
}

