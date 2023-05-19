const fs = require('fs');
const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js").development;
const path = require('path')
const basename = path.basename(__filename);

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: 3306,
  operatorsAliases: 0,
}); 

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


const db = {};

fs.
    readdirSync(__dirname)
    .filter(file => {
    return(file.indexOf('.') !== 0) && (file !== basename && file !== 'association.js')
            && (file.slice(-3) === '.js');

    })
  .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
    Object.keys(db).forEach(modelName => {
        if(db[modelName].associate){
            db[modelName].associate(db);
        }
    });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;