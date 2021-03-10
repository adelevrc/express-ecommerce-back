const User = require('../models/User'); 
const bcrypt = require('bcrypt'); 
const { json } = require('body-parser');
const jwt = require('jsonwebtoken'); 

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email, 
                password: hash, 
                role:req.body.role
            }); 
            user.save()
            .then(()=> res.status(201).json({ message : 'Utilisateur créé'}))
            .catch(error => res.status(400).json({ error })); 
        })
        .catch(error => res.status(500).json({ error })); 
}; 

exports.login = (req,res) => {
    User.findOne({
        email: req.body.email 
    })
        .then(user => {
            if(!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé '})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({ error: 'Mot de passe incorrect'})
                    }
                    res.status(200).json({ 
                        userId:user._id, 
                        token:jwt.sign(
                            { userId: user._id }, 
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    }); 
                })
                .catch(error => res.status(500).json({ message:error })); 
                
        })
        .catch(error => res.status(500).json({ error })); 
}; 

exports.getUsers = async (req, res) => {
        try{
            const users = await User.find();
            res.json(users); 

        }catch(err){
            res.json({ message : err })
        }
    }; 


exports.getUser = async (req, res) => {

    try{
        const user = await User.findById(req.params.id);
        res.json(user); 
    }catch(err){
        res.json({ message : err })
    }
}; 

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id }, { ...req.body, _id: req.params.id }
        ); 
        res.json(updatedUser); 
    }catch(err) {
        res.json({ message : err })
    }
}