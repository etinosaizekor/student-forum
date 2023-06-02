
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        categoryId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        categoryDescription: {
            type: Sequelize.STRING,
        },
        iconUrl: {
            type: Sequelize.STRING,
        }
        
    });
    return Category; 
}   