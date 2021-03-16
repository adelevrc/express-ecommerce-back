const express = require('express'); 
const router = express.Router(); 
const itemController = require('../controllers/item'); 
const roleAuth = require('../middleware/roleAuth'); 


router.get('/', itemController.getItems); 
router.get('/:id',itemController.getItem); 
router.post('/', itemController.createItem); 
router.delete('/:id', roleAuth, itemController.deleteItem); 
router.patch('/:id',roleAuth, itemController.updateItem); 


 



module.exports=router; 