const express = require('express');
const app = express();
const routes = require('./routes')
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', routes.user);
app.use('/posts', routes.post)

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})  