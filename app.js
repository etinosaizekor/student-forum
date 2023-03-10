const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes')
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.use('/users', routes.user);
app.use('/posts', routes.post)

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})       