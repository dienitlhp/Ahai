console.log('Hello nodemon');

const fs = require('fs');
//dung cai thu vien express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');
const imagesRouter = require(__dirname + '/modules/api/images/');

var app = express();

//set public folder public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('./public/index.html');
})

app.use('/api/images',imagesRouter)

mongoose.connect(config.connnectionString,(err) => {
  if(err){
    console.log(err);
  }else{
    console.log('duoc roi');
  }
})

//mo 1 cai port de chay local
app.listen(config.port, (req, res) => {
  console.log(`app listen on ${config.port}`);
})
