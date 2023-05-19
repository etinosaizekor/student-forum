
module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        commentId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        questionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'questions',
                key: 'questionId'
            }
        },
        commentBody: {      
            type: Sequelize.STRING,
            allowNull: false
        },
    })
    return Comment;
}