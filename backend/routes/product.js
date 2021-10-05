const express = require('express');
const productCtrl = require('../controllers/productCtrl');
const router = express.Router();


// send mes données : 
router.get('/seed', productCtrl.sendDatasProductToMoongoose )
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getProductById);

module.exports = router;

