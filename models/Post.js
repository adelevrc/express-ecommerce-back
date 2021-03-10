const mongoose = require('mongoose'); 

// On va créer un schéma, qui correpond à quoi nos données ont l'air

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }, 
    image:{
        type:String
    },
    price:{
        type:Number
    }
}); 

//On donne a mongoose le nom et le schéma qu'il doit utiliser

module.exports = mongoose.model('Posts', PostSchema); 