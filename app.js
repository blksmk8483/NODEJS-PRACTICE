const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));

// This middleware will always run
app.use('/', (req, res, next) => {
    console.log('This will always run!!!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('Another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('Another middleware!');
    res.send('<h1>Hello from the other side!</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);