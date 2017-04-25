const express = require('express');

const Router = express.Router();

const imagesController = require('./imagesController')

Router.post('/', (req, res) => {
  //doc du lieu tu cai file imageData
  //var imageInfoCollection = imagesController.fetchImageCollection();

  //khai bao object
  var imageInfo = {
    id : req.body.id,
    name: req.body.name,
    imageLink: req.body.imageLink,
    description: req.body.description
  }

  console.log('post data ', req.body);

  //luu lai vao db
  imagesController.addImage(imageInfo);
  //bao thanh cong
  res.send('Success');
})

Router.get('/', (req, res) => {
  if(!req.query.id && req.query.id !=0){
    imagesController.fetchImageCollection().then((result) => {res.send(result)});
  }else if (req.query.id){
    imagesController.fetchImageCollectionById(req.query.id).then((result) => {res.send(result)});
  }
})

Router.put('/', (req, res) => {
  if (req.body.id) {
    var newData = {
      name: req.body.name,
      imageLink: req.body.imageLink,
      description: req.body.description
    }

    var result =
      imagesController.updateImageConllectionById(req.body.id, newData);

    res.send(result);
  }
  res.send('Don`t have id');
})

Router.delete('/', (req, res) => {
  if(req.query.id){
    imagesController.deleteImageById(req.query.id).then((result) => {res.send(result)});;
    res.send("delete roi nha");
  }

})

module.exports = Router;
