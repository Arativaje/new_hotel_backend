const express = require ('express');
const productController = require('../controller/product.controller');
const productRoute = express.Router();

productRoute.get('/',productController.getProduct);
productRoute.post('/',productController.addProduct);
productRoute.put('/:id',productController.updateProduct);
productRoute.delete('/:id',productController.deleteProduct);
productRoute.get('/:id',productController.getProductById);

module.exports = productRoute;