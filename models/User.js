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
    }
}); 

userSchema.virtual('commandsPassed', {
    ref:'Command', 
    localField: '_id', 
    foreignField: 'user',
})

userSchema.plugin(uniqueValidator); 
userSchema.set('toObject', {virtuals: true}); 
userSchema.set('toJSON', {virtuals: true})

module.exports = mongoose.model('User', userSchema); 