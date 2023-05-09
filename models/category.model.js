
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
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