const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/user'); 
const Post = require('../models/Post'); 
const auth = require('../middleware/auth'); 
const roleAuth = require('../middleware/roleAuth'); 


router.post('/signup', userController.signup); 
router.post('/login', userController.login); 
router.get('/users',roleAuth, userController.getUsers); 
router.get('/:id', roleAuth, userController.getUser); 
router.patch('/:id', userController.updateUser); 



module.exports = router; 