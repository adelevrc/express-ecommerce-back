const mongoose = require('mongoose'); 

// On va créer un schéma, qui correpond à quoi nos données ont l'air

const CommandSchema = mongoose.Schema({
    date: {
        type: Date, 
        default: Date.now
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}); 

//On donne a mongoose le nom et le schéma qu'il doit utiliser

module.exports = mongoose.model('Command', CommandSchema); 