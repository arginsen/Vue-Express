const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');
const manufacturerController = require('../../controllers/manufacturer');

// get all manufacturers
router.get('/manufacturers', manufacturerController.all);
// get single manufacturer
router.get('/manufacturers/:id', manufacturerController.byId);
// create single manufacturer
router.post('/manufacturers', manufacturerController.create);
// set single manufacturer
router.put('/manufacturers/:id', manufacturerController.update);
// delete single manufacturer
router.delete('/manufacturers/:id', manufacturerController.remove);

// get all products
router.get('/products', productController.all);
// get single product
router.get('/products/:id', productController.byId);
// create single product
router.post('/products', productController.create);
// set single product
router.put('/products/:id', productController.update);
// delete single product
router.delete('/products/:id', productController.remove);

module.exports = router;