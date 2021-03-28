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
        ref:'Products'
    }]
}); 


module.exports = mongoose.model('Order', OrderSchema); 