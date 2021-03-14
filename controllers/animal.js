const Animal = require('../models/Animal'); 

exports.getAnimals = async (req, res) => {
    try{
        const animal = await Animal.find();
        res.json(animal); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getAnimal =  async (req, res) => {
    try{
        const animal = await Animal.findById(req.params.id);
        res.json(animal); 
    }catch(err){
        res.json({ message : err })
    }
};

exports.createAnimal = async (req, res) => {
    const animal = new Animal ({
        name : req.body.name, 
        dateOfBirth:req.body.dateOfBirth,
        description : req.body.description, 
        care: req.body.care,
        image: req.body.image, 
        isDead: req.body.isDead
    }); 
    try{
        const savedAnimal = await animal.save()
        res.json(savedAnimal)

    }catch(err){
        res.json({ message : err })
    }
}

exports.deleteAnimal =  async (req,res) => {
    try {
    const removedAnimal = await Animal.deleteOne({ _id: req.params.id })
    res.json(removedAnimal); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateAnimal = async (req, res) => {
    try {
        const updatedAnimal = await Animal.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedAnimal); 
    }catch(err) {
        res.json({ message : err })
    }
};
