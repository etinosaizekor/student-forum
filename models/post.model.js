
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tags: {
            type: Sequelize.STRING
        }
    });
    return Post;
}