const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/user'); 
const Post = require('../models/Post'); 
const auth = require('../middleware/auth'); 


router.post('/signup', userController.signup); 
router.post('/login', userController.login); 
router.get('/users', userController.getUsers); 
router.get('/:id', userController.getUser); 
router.patch('/:id', userController.updateUser); 



module.exports = router; 