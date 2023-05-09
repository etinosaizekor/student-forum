const db = require('../models');
const query = require('../services/queries')
const Reply = db.reply;

const createReply = async (req, res) => {
    const newReply = await query.create(Reply, req.body);
    res.send(newReply)
}

const deleteReply = async (req, res) => {
    const delectedRowCount = await query.deleteInstance(Reply, req.params);
    if(delectedRowCount[0] == 0){
        res.send("No comment was deleted")
    }
    else{
        res.send("Reply delected successful")
    }
}

module.exports = {
    createReply,
    deleteReply
}

