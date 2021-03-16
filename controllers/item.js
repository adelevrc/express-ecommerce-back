const Item = require('../models/Item'); 

exports.getItems = async (req, res) => {
    try{
        const item = await Item.find();
        res.json(item); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getItem =  async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        res.json(item); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createItem = async (req, res) => {
    const item = new Item ({
        title : req.body.title, 
        description : req.body.description, 
        image: req.body.image, 
        price: req.body.price, 
        inStock: req.body.inStock
    }); 
    try{
        const savedItem = await item.save()
        res.json(savedItem)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deleteItem =  async (req,res) => {
    try {
    const removedItem = await Item.deleteOne({ _id: req.params.id })
    res.json(removedItem); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedItem); 
    }catch(err) {
        res.json({ message : err })
    }
};

