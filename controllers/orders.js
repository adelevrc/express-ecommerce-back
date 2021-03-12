const Command = require('../models/Order'); 

exports.getOrders = async (req, res) => {
    try{
        const command = await Command.find();
        res.json(command); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getOrder =  async (req, res) => {
    try{
        const command = await Command.findById(req.params.id);
        res.json(command); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createOrder = async (req, res) => {
    const command = new Command ({
        user: req.body.user, 
        products: req.body.producs
    }); 
    try{
        const savedCommand = await command.save()
        res.json(savedCommand)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deleteOrder =  async (req,res) => {
    try {
    const removedCommand = await Command.deleteOne({ _id: req.params.id })
    res.json(removedCommand); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateOrder = async (req, res) => {
    try {
        const updatedCommand = await Command.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedCommand); 
    }catch(err) {
        res.json({ message : err })
    }
};

// exports.userByCommand = async (req, res) => {
//     try{
//         console.log(req.params);
//         const userByCommand = await Command.findById(req.params.id).populated('user');
//         res.json(userByCommand); 
    
//     }catch(err){
//         res.json({ message : 'ohlala' })
//     }

// }

// je veux pour une commande, le nom de l'utilisateur
exports.userByCommand = async (req, res) => {
    try {
       const data = await Command.find()
                                 .populate({path: 'user', select: '_id email'});
       res.status(200).json({success: true, data});
       console.log('Ohyes'); 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
       console.log('ohno'); 
    }
 }

