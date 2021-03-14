const express = require('express'); 
const router = express.Router(); 
const animalController = require('../controllers/animal'); 
const roleAuth = require('../middleware/roleAuth'); 

router.get('/', animalController.getAnimals); 
router.get('/:id',animalController.getAnimal); 
router.post('/',animalController.createAnimal); 
router.delete('/:id', animalController.deleteAnimal); 
router.patch('/:id',animalController.updateAnimal); 

module.exports=router; 