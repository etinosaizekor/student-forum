require('dotenv').config();

const databaseName = process.env.DATABASE_NAME
const dbUser = process.env.DATABASE_USER
const dbPsw = process.env.DATABASE_PSW

module.exports = {
  "development" : {
    "username" : dbUser,
    "password": dbPsw,
    "database": databaseName,
    "host": "localhost",
    "dialect": "mysql"
  }
}