
module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subject', {
        subject_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        subject_desc: {
            type: Sequelize.STRING,
        },
        
    });
    return Subject;
}