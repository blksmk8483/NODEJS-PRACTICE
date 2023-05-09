const path = require('path')

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();

const products = [];

// localhost:3000/admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Prodcut' })
});

// localhost:3000/admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;