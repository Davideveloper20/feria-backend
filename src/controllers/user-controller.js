const path = require('path');
const ImageModel = require('../models/image-model');

exports.createProduct = async (req, res) => {
  try {
    const { title, reference, size, price, image, categorie, color } = req.body;

    const product = new ImageModel({ title, reference, size, price, image, categorie, color });

    const response = await product.save();  
    
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.updatedImage = async (req, res) => {
  try {
    const { _id, title, image, price, reference, size, color } = req.body;    
    
    const existingImage = await ImageModel.findById(_id);
    
    if (!existingImage) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    existingImage.title = title || existingImage.title;
    existingImage.image = image || existingImage.image;
    existingImage.price = price || existingImage.price;
    existingImage.reference = reference || existingImage.reference;
    existingImage.size = size || existingImage.size;
    existingImage.color = color || existingImage.color;

    await existingImage.save();
    res.json(existingImage);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.deleteImage = async (req, res) => {
  try {

    const { productId } = req.params;
    
    const existingImage = await ImageModel.findByIdAndDelete(productId);
    
    if (!existingImage) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (!category) {
      return res.status(400).json({ error: 'Categoría no proporcionada' });
    }
    const images = await ImageModel.find({ categorie: category });

    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

  
