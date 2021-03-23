const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 


module.exports = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]; //token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'non autorisé'
      })
       // if token is valid
       User.findOne({ _id: decoded.userId}, (err, user) =>{
        //if (err) return res.status(400).json(err)
        if (user.role === "admin") 
        {next()}
        else {
            res.status(401).json('Requête non authentifiée ') 
        }
      })
    })
  }