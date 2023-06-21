const path = require('path')

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// localhost:3000/admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// localhost:3000/admin/products => GET
router.get('/products', adminController.getProducts);

// localhost:3000/admin/add-product => POST
router.post('/add-product', adminController.postAddProduct );

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

module.exports = router;