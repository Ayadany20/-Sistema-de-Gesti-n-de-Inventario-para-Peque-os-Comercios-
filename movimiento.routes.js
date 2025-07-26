const express = require('express');
const router = express.Router();
const controller = require('../controllers/movimiento.controller');

router.get('/', controller.getMovimientos);
router.get('/:id', controller.getMovimientoById); // opcional
router.post('/', controller.createMovimiento);
// normalmente no se actualizan o eliminan movimientos

module.exports = router;
