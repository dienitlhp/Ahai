const fs = require('fs');
const imagesModel = require('./imagesmodel');

var addImage = (data) => {
  imagesModel.create(data, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  })
}

var fetchImageCollection = () => {
  return imagesModel.find({});
}

var fetchImageCollectionById = (id) => {
  return imagesModel.find({id:id});
}

var deleteImageById = (id) =>{
  return imagesModel.deleteOne({id:id});
}

/*var saveImageCollection = (data) => {
  fs.writeFileSync('imageData.json', JSON.stringify(data));
}*/

/*var updateImageConllectionById = (id, newData) => {
  var imageInfoCollection = fetchImageCollection();

  if (id < 0 || id > imageInfoCollection.length)
    return 'id invalid';
  else {
    imageInfoCollection[id - 1] = newData;
    saveImageCollection(imageInfoCollection);
    return 'Success';
  }

}*/
module.exports = {
  fetchImageCollection,
  fetchImageCollectionById,
  addImage,
  deleteImageById
}
