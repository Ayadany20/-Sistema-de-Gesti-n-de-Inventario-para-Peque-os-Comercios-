const express = require('express');
const router = express.Router();
const controller = require('../controllers/alerta.controller');

router.get('/', controller.getAlertas);
router.get('/:id', controller.getAlertaById);
router.post('/', controller.createAlerta);
router.put('/:id', controller.updateAlerta);
router.delete('/:id', controller.deleteAlerta);

module.exports = router;
