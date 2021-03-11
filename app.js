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

