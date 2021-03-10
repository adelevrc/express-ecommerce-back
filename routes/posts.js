const express = require('express'); 
const router = express.Router(); 
const Post = require('../models/Post'); 
const postController = require('../controllers/post'); 



router.get('/', postController.getPosts); 
router.get('/:id',postController.getPost); 
router.post('/', postController.createPost); 
router.delete('/:id',postController.deletePost); 
router.patch('/:id', postController.updatePost); 


 



module.exports=router; 