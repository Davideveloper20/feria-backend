const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');
const authController = require('../controllers/auth-controller');

router.post('/images', userController.updatedImage);

router.post('/create', userController.createProduct);

router.delete('/delete/:productId', userController.deleteImage);

router.post('/login', authController.login);

router.get('/category/:category', userController.getProductsByCategory);

module.exports = router;
