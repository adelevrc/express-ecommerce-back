const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/user'); 
const auth = require('../middleware/auth'); 
const roleAuth = require('../middleware/roleAuth'); 


router.post('/signup', userController.signup); 
router.post('/login', userController.login); 
router.get('/users',roleAuth, userController.getUsers); 
router.get('/:id', userController.getUser); 
router.patch('/:id', userController.updateUser); 


// Recupérer toutes les commandes d'un utilisateur
router.get('/commands/:id', userController.getAllCommands)



module.exports = router; 