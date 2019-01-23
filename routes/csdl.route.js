const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const csdl_controller = require('../controllers/csdl.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/csdl', csdl_controller.get);
router.post('/csdl',csdl_controller.store);

router.get('/csdl/:id', csdl_controller.detail);
router.put('/csdl/:id', csdl_controller.update);
router.delete('/csdl/:id', csdl_controller.delete);

router.get('/findUrl/:newUrl', csdl_controller.findNewUrl);


module.exports = router;