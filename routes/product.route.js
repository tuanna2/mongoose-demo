const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/products', product_controller.get);
router.post('/products',product_controller.store);

router.get('/products/:productId', product_controller.detail);
router.put('/products/:productId', product_controller.update);
router.delete('/products/:productId', product_controller.delete);



module.exports = router;