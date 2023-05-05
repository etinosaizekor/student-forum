const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const Reply = sequelize.define('Reply', {
        reply_body: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'userId'
            }
        },
        commentId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'Comments',
                key: 'commentId'
            }
        },
    });
    return Reply;
}