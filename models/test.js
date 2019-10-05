const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    
    
    productId:{
        type:String,
        required: true
    },
    deliveryLocation:{
        type:String,
        required: true
    },
    phoneNo:{
        type:Number,
        required: true
    },
    paymentMode:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    barcode:{
        type:String,
        required: true
    },
    status:{
        type:Number,
        default:0
    }
   

   
})

module.exports = mongoose.model('Test', TestSchema);