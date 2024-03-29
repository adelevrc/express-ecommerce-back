const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator'); 

const userSchema = mongoose.Schema({
    email: {
        type:String,
        required: true, 
        unique:true 
    }, 
    password: {
        type:String, 
        required:true
    },
    role:{
        type: String, 
        default: 'basic', 
        enum: ["basic", "admin"]
    }, 
    name:{
        type:String
    }, 
    phoneNumber:{
        type:Number
    }, 
    adress:{
        type:String
    }, 
    zip:{
        type:Number
    }, 
    country:{
        type:String
    }
}); 



userSchema.plugin(uniqueValidator); 


module.exports = mongoose.model('User', userSchema); 