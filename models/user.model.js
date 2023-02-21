
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date_of_birth: {
            type: Sequelize.DATE,
            allowNull: false
        },
        school: {
            type: Sequelize.STRING
        }
    });
    return User;
}