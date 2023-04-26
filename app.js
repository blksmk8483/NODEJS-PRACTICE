const http = require('http');

const express = require('express');

const app = express();

//middleware
app.use('/add-product', (req, res, next) => {
    console.log('Another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});
app.use('/', (req, res, next) => {
    console.log('Another middleware!');
    res.send('<h1>Hello from the other side!</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);