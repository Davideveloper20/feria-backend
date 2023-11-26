const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: { type: String, required: false },
  image: { type: String, required: false },  
  price: { type: String, required: false },
  categorie: { type: String, required: false },
  reference: { type: String, required: false },
  size: { type: String, required: false },    
  color: { type: String, required: false },
});

const ImageModel = mongoose.model('Product', imageSchema);

module.exports = ImageModel;
