
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        categoryId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category_desc: {
            type: Sequelize.STRING,
        },
        
    });
    return Category; 
}   