const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
    console.log('/users Middleware');
    res.send('<p>Middleware that handles /users</p>')
});

app.use('/', (req, res, next) => {
    console.log('/ Middleware');
    res.send('<p>Middleware that handles /</p>')
    next();
});

app.listen(5000);