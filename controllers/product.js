const Product = require('../models/Product'); 

exports.getProducts = async (req, res) => {
    try{
        const product = await Product.find();
        res.json(product); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getProduct =  async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(product); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createProduct = async (req, res) => {
    const product = new Product ({
        title : req.body.title, 
        description : req.body.description, 
        image: req.body.image, 
        price: req.body.price,
        category: req.body.category,
        inStock: req.body.inStock
    }); 
    try{
        const savedProduct = await product.save()
        res.json(savedProduct)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deleteProduct =  async (req,res) => {
    try {
    const removedProduct = await Product.deleteOne({ _id: req.params.id })
    res.json(removedProduct); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedProduct); 
    }catch(err) {
        res.json({ message : err })
    }
};

