
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
        commentBody: {
            type: Sequelize.STRING,
            allowNull: false
        },
    })
    return Comment;
}