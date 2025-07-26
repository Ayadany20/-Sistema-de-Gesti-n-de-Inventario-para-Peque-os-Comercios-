const express = require('express');
const router = express.Router();
const controller = require('../controllers/sku_producto.controller');

router.get('/', controller.getSkus);
router.get('/:id', controller.getSkuById);
router.post('/', controller.createSku);
router.put('/:id', controller.updateSku);
router.delete('/:id', controller.deleteSku);

module.exports = router;
