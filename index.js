const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');
const assert = require('assert');
const localStorage = require('localStorage');
const fetch = require('node-fetch');

//Accessing model
const Test = require('./models/test');
const Stock = require('./models/stock');
const Zalo = require('./models/zalotest');
const unirest = require('unirest');
const path = require('path');
//mongoose connnection
mongoose.connect('mongodb+srv://shubham:navigater@1@cluster0-ejye1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);


const app = express();
app.use(Cors());





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.get('/', (req, res) => {

//   res.send('hello')
// })

//  Zalo.find({},function(err, abcd){
//   if(err){
//     console.log(err);
//   }
//   fetch('https://test.zalonin.com/api/fetch-order-products')
//   .then(res => res.json())
//   .then(json => { 
//     if(abcd.length<json.length){
//     for(var i=0; i<json.length; i++){
//         if(json[i].order_id !== abcd[i].orderId || abcd.length === 0){
//         const zalo = new Zalo({
//           price:json[i].original_price,
//           paymode:json[i].payment_mode,
//           orderId:json[i].order_id
//         })

//     zalo.save()
//     .then(result => {
//       // console.log(result)
//       res.status(201).json({
//         message: 'handling post',
//         createdUser:result
//       })
//     })
//     .catch(err => {
//         res.status(400).json({
//             message:"error aagya",
//             error:err
//         })

//   })
// }

//     }

//   }
//       })

//     })
//   })


app.get('/zalotest', function (req, res) {
  Zalo.find({}, function (err, abcd) {
    if (err) {
      console.log(err);
    } else {
      res.send(abcd)
      console.log(abcd.length);
    }
  })
})





app.post('/gotData', (req, res, next) => {
  const test = new Test({
    productId: req.body.productId,
    deliveryLocation: req.body.delloc,
    phoneNo: req.body.phn,
    paymentMode: req.body.paymo,
    price: req.body.price,
    barcode: req.body.barcode
  })
  test.save()
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'handling post',
        createdUser: result
      })
    })
    .catch(err => {
      res.status(400).json({
        message: "error aagya",
        error: err
      })
    });
})


app.post('/stock', (req, res) => {
  const stock = new Stock({
    comId:req.body.comId,
    comName:req.body.comName,
   prodName:req.body.prodName,
      Color:req.body.Color,
   Category:req.body.Category,
     Gender:req.body.Gender,
       Size:req.body.Size,
   location:req.body.location
    
  })
    stock.save()
    .then(result => {
      res.send("hogya save");
      console.log(result)
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/users', function (req, res) {
  Test.find({}, function (err, abcd) {
    if (err) {
      console.log(err);
    } else {
      res.send(abcd)
    }
  })
})

app.get('/order/:id', (req, res) => {
  Test.findById({ _id: req.params.id }, function (err, abcd) {
    if (err) {
      console.log(err);
    } else {
      console.log(abcd);
      res.send(abcd)
    }
  })
});

app.get('/stock', function (req, res) {
  Stock.find({}, function (err, some) {
    if (err) {
      console.log(err);
    } else {
      res.send(some)
    }
  })
});

app.get('/stock/:id', (req, res) => {
  Stock.findById({ _id: req.params.id }, function (err, abcd) {
    if (err) {
      console.log(err);
    } else {
      console.log(abcd);
      res.send(abcd)
    }
  })
});

app.post('/tst2', (req, res) => {
  unirest.post("https://google-translate1.p.rapidapi.com/language/translate/v2/detect")
    .header("X-RapidAPI-Host", "google-translate1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "c1403c1c51mshcf9af520214b743p154958jsn3c495144f3f4")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("q=English is hard, but detectably so")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
})


app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
if (process.env.NODE_ENV === 'production') {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}



app.listen(process.env.PORT || 3001, (console.log("connected at port 3001")));