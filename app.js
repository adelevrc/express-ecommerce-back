const express = require ('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const postsRoute = require('./routes/posts'); 
const userRoute  = require ('./routes/user'); 
const User = require('./models/User')
const cors = require('cors');
const {authRole} = require('./basicAuth');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken'); 

require('dotenv/config'); 

// Package cors installé
app.use(cors()); 

// On fait en sorte qu'à chaque fois qu'on atteint une route, on utilise bodyparser - toujours le mettre au début ! 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', ((req, res) => {
  let token = req.headers.authorization.split(' ')[1]; //token
  console.log("token");
  console.log(token);

  jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'non autorisé'
    })
     // if token is valid
     User.findOne({ _id: decoded.userId}, (err, user) =>{
       console.log(err);
       console.log(user);
      //if (err) return res.status(400).json(err)
      if (user.role === "admin") return res.status(200).json({
        title: 'COOL'
      })
      return res.status(401).json({
        title: 'PAS COOL'
      })
     
    })

  })
})); 

//Middlewares = a function that executes when routes are being hit 
app.use('/posts', postsRoute); 
app.use('/auth', userRoute); 

// On connecte à mongoose 
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connected to DB !'))
    .catch(() => console.log('Connexion to DB failed !'));

// Start listenning to the server
app.listen(8000);  

