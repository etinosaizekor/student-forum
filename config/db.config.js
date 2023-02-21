require('dotenv').config();

const databaseName = process.env.DATABASE_NAME
const dbUser = process.env.DATABASE_USER
const dbPsw = process.env.DATABASE_PSW

module.exports = {
    HOST: 'localhost',
    USER: dbUser,
    PASSWORD: dbPsw,
    DB: databaseName,
    dialect: 'mysql',
  };