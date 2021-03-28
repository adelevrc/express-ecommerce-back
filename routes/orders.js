const express = require('express'); 
const router = express.Router(); 
const orderController = require('../controllers/orders'); 


router.get('/', orderController.getOrders); 
router.get('/user', orderController.getOrdersByUser); 
router.get('/:id',orderController.getOrder); 
router.post('/', orderController.createOrder); 
router.delete('/:id', orderController.deleteOrder); 
router.patch('/:id', orderController.updateOrder); 

 



module.exports=router; 