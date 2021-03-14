const mongoose = require('mongoose'); 


const AnimalSchema = mongoose.Schema({
    name: {
        type:String, 
        required:true
    }, 
    dateOfBirth:{
        type:Date
    },
    description:{
        type:String
    }, 
    care:{
        type:String
    },
    image:{
        type:String
    },
    isDead:{
        type:Boolean
    }
})

module.exports = mongoose.model('Animal', AnimalSchema); 