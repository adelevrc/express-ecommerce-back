const mongoose = require('mongoose'); 

// On va créer un schéma, qui correpond à quoi nos données ont l'air

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    image:{
        type:String
    },
    price:{
        type:Number
    }, 
    category:{
        type:String
    },
    inStock:{
        type:Boolean
    }
    
}); 

//On donne a mongoose le nom et le schéma qu'il doit utiliser

module.exports = mongoose.model('Product', ProductSchema); 