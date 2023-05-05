const db = require('../models');const User = db.user;
const Reply = db.reply;
const Comment = db.comment;

const assocation = function(){
    console.log(User);
    User.hasMany(Reply, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Reply.belongsTo(User)
    
    
    Comment.hasMany(Reply, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
}

module.exports = assocation


