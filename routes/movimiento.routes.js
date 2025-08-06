const express = require('express');
const router = express.Router();
const controller = require('../controllers/movimiento.controller');

router.get('/', controller.getMovimientos);
router.post('/', controller.createMovimiento);

module.exports = router;