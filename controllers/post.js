const Post = require('../models/Post'); 

exports.getPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.json(post); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getPost =  async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createPost = async (req, res) => {
    const post = new Post ({
        title : req.body.title, 
        description : req.body.description, 
        image: req.body.image, 
        price: req.body.price
    }); 
    try{
        const savedPost = await post.save()
        res.json(savedPost)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deletePost =  async (req,res) => {
    try {
    const removedPost = await Post.deleteOne({ _id: req.params.id })
    res.json(removedPost); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedPost); 
    }catch(err) {
        res.json({ message : err })
    }
}