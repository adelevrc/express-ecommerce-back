const express = require('express'); 
const router = express.Router(); 
const postController = require('../controllers/post'); 
const roleAuth = require('../middleware/roleAuth'); 



router.get('/', postController.getPosts); 
router.get('/:id',postController.getPost); 
router.post('/',roleAuth, postController.createPost); 
router.delete('/:id', roleAuth, postController.deletePost); 
router.patch('/:id',roleAuth, postController.updatePost); 


 



module.exports=router; 