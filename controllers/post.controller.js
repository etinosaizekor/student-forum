const db = require('../models');
const query = require('../services/queries')
const Post = db.post;

const createPost = async (req, res) => {
    const newPost = await query.create(Post, req.body);
    res.send(newPost)
}

const searchPost = async (req, res) => {
    const post = await query.search(Post, req.params);
    res.send(post)
}

const deletePost = async (req, res) => {
    const delectedRowCount = await query.deleteInstance(Post, req.params);
    if(delectedRowCount[0] == 0){
        res.send("No post was deleted")
    }
    else{
        res.send("Post delected successful")
    }
}

module.exports = {
    createPost,
    searchPost,
    deletePost
}

