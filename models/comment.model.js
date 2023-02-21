
module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        comment_body: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Comment;
}