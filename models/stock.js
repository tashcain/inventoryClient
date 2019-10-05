const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    comId:{
        type:String,
        required: true
    },
    comName:{
        type:String,
        required: true
    },
   prodName:{
    type:String,
    required: true
   },
      Color:{
        type:String,
        required: true
      },
   Category:{
    type:String,
    required: true
   },
    Gender :{
        type:String,
        required: true
    },
       Size:{
        type:String,
        required: true
       },
   location:{
    type:String,
    required: true
   },
    status:{
        type:Number,
        default:0
    }
})
    

module.exports = mongoose.model('Stock', StockSchema);