
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
            allowNull: true
        },
        school: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB('long'),
            allowNull: true
        }
    },
    {
        timestamps: false
    }
    );
    return User;
}