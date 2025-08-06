const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');
const { Producto } = require('../models');

//vistas
router.get('/views/productos', controller.renderProductosVista);

router.get('/', controller.getProductos);
router.get('/:id', controller.getProductoById);
router.post('/', controller.createProducto);
router.put('/:id', controller.updateProducto);
router.delete('/:id', controller.deleteProducto);

module.exports = router;