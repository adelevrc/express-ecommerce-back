const mongoose = require('mongoose'); 


const OrderSchema = mongoose.Schema({
    date: {
        type: Date, 
        default: Date.now
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
}); 


module.exports = mongoose.model('Order', OrderSchema); 