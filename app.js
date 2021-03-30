const express = require ('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const productsRoute = require('./routes/product'); 
const userRoute  = require ('./routes/user'); 
const ordersRoute = require('./routes/orders'); 
const animalRoute = require('./routes/animal'); 
const quantityRoute = require('./routes/quantityOfProductOrdered'); 
const cors = require('cors');
const { JsonWebTokenError } = require('jsonwebtoken');
const PORT = process.env.PORT || 8000;


require('dotenv/config'); 

// Package cors installé
app.use(cors()); 

// On fait en sorte qu'à chaque fois qu'on atteint une route, on utilise bodyparser - toujours le mettre au début ! 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


//Middlewares = a function that executes when routes are being hit 
app.use('/products', productsRoute); 
app.use('/auth', userRoute); 
app.use('/orders',ordersRoute); 
app.use('/animals', animalRoute);
app.use('/quantity', quantityRoute); 

// On connecte à mongoose 
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connected to DB !'))
    .catch(() => console.log('Connexion to DB failed !'));


    module.exports=app; 
// Start listenning to the server
console.log(`PORT ${PORT}`);
app.listen(PORT);  

