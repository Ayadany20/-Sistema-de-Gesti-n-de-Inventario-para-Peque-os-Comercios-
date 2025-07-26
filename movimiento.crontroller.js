const { Movimiento } = require('../models');

exports.getMovimientos = async (req, res) => {
  const movimientos = await Movimiento.findAll();
  res.json(movimientos);
};

exports.createMovimiento = async (req, res) => {
  const nuevo = await Movimiento.create(req.body);
  res.status(201).json(nuevo);
};
