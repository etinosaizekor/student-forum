
module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        questionId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        questionTitle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        questionBody: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        categoryId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'categoryId'
            }
        }
    });
    return Question;
}