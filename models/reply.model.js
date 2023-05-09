const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const Reply = sequelize.define('reply', {
        replyBody: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        commentId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'comments',
                key: 'commentId'
            }
        },
    });
    return Reply;
}