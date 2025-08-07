const { Movimiento, Producto, Proveedor } = require('../models');

exports.renderMovimientosVista = async (req, res) => {
  try {
    const movimientos = await Movimiento.findAll({
      include: [
        { model: Producto, as: 'Producto' },
        { model: Proveedor, as: 'Proveedor' }
      ],
      order: [['fecha', 'DESC']]
    });
    res.render('movimientos', { 
      movimientos: movimientos || []
    });
  } catch (error) {
    console.error('Error al cargar movimientos:', error);
    res.status(500).render('movimientos', { 
      movimientos: [],
      error: 'Error al cargar los datos'
    });
  }
};

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
