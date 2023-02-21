const express = require('express');
const app = express();

const db = require('./models');

const PORT = process.env.PORT || 3000;


db.sequelize.sync({alter: true});

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})