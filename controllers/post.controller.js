const db = require('../models');
const query = require('../services/queries')
const Post = db.post;

const createPost = async (req, res) => {
    const newPost = await query.create(Post, req.body);
    res.send(newPost)
}

module.exports = {
    createPost
}

