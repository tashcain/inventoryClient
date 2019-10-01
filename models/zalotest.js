const mongoose = require('mongoose');

const ZaloSchema = mongoose.Schema({
    price:{
        type: Number
    },
    paymode:{
        type: String
    },
    orderId:{
        type: String,
        // index: { unique: true }
    },
    status:{
        type:Number,
        default:0
    }
})
    

module.exports = mongoose.model('Zalo', ZaloSchema);