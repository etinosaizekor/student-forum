
module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('Comment', {
        commentId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'userId'
            }
        },
        comment_body: {
            type: Sequelize.STRING,
            allowNull: false
        },
    })
    return Comment;
}