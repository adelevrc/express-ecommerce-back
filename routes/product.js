const express = require('express'); 
const router = express.Router(); 
const productController = require('../controllers/product'); 
const roleAuth = require('../middleware/roleAuth'); 

router.get('/', productController.getProducts); 
router.get('/:id',productController.getProduct); 
router.post('/', roleAuth, productController.createProduct); 
router.delete('/:id', roleAuth, productController.deleteProduct); 
router.patch('/:id', roleAuth, productController.updateProduct); 

module.exports=router; 

