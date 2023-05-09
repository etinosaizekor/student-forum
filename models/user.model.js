const Reply = require('./reply.model')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        school: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false
    }
    );
    return User;
}