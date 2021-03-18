const Order = require('../models/Order'); 
const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 


exports.getOrders = async (req, res) => {
    try{
        const order = await Order.find();
        res.json(order); 

    }catch(err){
        res.json({ message : err })
    }
}; 

exports.getOrdersByUser = async (req, res, next) => {

    console.log(req.headers.authorization.split(' ')[1]); 
    token = req.headers.authorization.split(' ')[1]; 
    
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'non autorisé'
      })

        User.findOne({ _id: decoded.userId}, (err, user) =>{
        if (err) return res.status(400).json(err)
        console.log(user);
        console.log(user._id);
        return Order.find({user:decoded.userId})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
      })
    }) 
};

exports.getOrder =  async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        res.json(order); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.createOrder = async (req, res) => {
    const order = new Order ({
        user: req.body.user, 
        products: req.body.products
    }); 
    try{
        const savedOrder = await order.save()
        res.json(savedOrder)

    }catch(err){
        res.json({ message : err })
    }

}

exports.deleteOrder =  async (req,res) => {
    try {
    const removedOrder = await Order.deleteOne({ _id: req.params.id })
    res.json(removedOrder); 
    } catch(err) {
        res.json({ message : err })
    }
}; 

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedOrder); 
    }catch(err) {
        res.json({ message : err })
    }
};

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

