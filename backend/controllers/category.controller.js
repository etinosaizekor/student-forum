const Category = require('../models').category;
const query = require('../services/queries');

const createCategory = async (req, res) => {
    const newCategory = await query.create(Category, req.body);
    res.send(newCategory)
}

const getAllCategory = async(req, res) => {
    const allCategories = await query.getAll(Category);
    res.send(allCategories)
}

const searchCategory = async (req, res) => {
    const category = await query.search(Category, req.params);
    res.send(category)
}
    
module.exports = {
    createCategory,
    searchCategory,
    getAllCategory
}