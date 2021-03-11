const express = require('express'); 
const router = express.Router(); 
const commandController = require('../controllers/command'); 


router.get('/', commandController.getCommands); 
router.get('/:id',commandController.getCommand); 
router.post('/', commandController.createCommand); 
router.delete('/:id', commandController.deleteCommand); 
router.patch('/:id', commandController.updateCommand); 


 



module.exports=router; 