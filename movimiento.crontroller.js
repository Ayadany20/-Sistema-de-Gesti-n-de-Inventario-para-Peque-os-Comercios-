const { Movimiento } = require('../models');

exports.getMovimientos = async (req, res) => {
  try {
    const movimientos = await Movimiento.findAll();
    res.json(movimientos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener movimientos' });
  }
};

exports.createMovimiento = async (req, res) => {
  try {
    const nuevo = await Movimiento.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear movimiento' });
  }
};
