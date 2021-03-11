const Command = require('../models/Command'); 

exports.getCommands = async (req, res) => {
    try{
        const command = await Command.find();
        res.json(command); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getCommand =  async (req, res) => {
    try{
        const command = await Command.findById(req.params.id);
        res.json(command); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createCommand = async (req, res) => {
    const command = new Command ({
        user: req.body.user
    }); 
    try{
        const savedCommand = await command.save()
        res.json(savedCommand)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deleteCommand =  async (req,res) => {
    try {
    const removedCommand = await Command.deleteOne({ _id: req.params.id })
    res.json(removedCommand); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateCommand = async (req, res) => {
    try {
        const updatedCommand = await Command.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedCommand); 
    }catch(err) {
        res.json({ message : err })
    }
};

