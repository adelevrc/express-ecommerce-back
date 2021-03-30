const express = require('express'); 
const router = express.Router(); 
const quantityController = require('../controllers/quantityOfProductOrdered'); 

 
router.get('/:id',quantityController.quantityOfProductOrdered); 
router.post('/',quantityController.createQuantityOfProduct); 


module.exports=router; 