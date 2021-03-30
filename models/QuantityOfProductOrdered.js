const mongoose = require('mongoose'); 


const numberOfProductOrderedSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    }, 
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Order'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Item'
    }
}); 

module.exports = mongoose.model('numberOfProductOrdered', numberOfProductOrderedSchema); 