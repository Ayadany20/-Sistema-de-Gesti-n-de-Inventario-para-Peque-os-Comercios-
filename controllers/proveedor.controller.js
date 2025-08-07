const { Proveedor } = require('../models');

exports.renderProveedoresVista = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.render('proveedores', { 
      proveedores
    });
  } catch (error) {
    console.error('Error al cargar proveedores:', error);
    res.status(500).render('proveedores', { 
      proveedores: [],
      error: 'Error al cargar los datos'
    });
  }
};

exports.getProveedores = async (req, res) => {
  const proveedores = await Proveedor.findAll();
  res.json(proveedores);
};

exports.getProveedorById = async (req, res) => {
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ msg: 'No encontrado' });
  res.json(proveedor);
};

exports.createProveedor = async (req, res) => {
  const nuevo = await Proveedor.create(req.body);
  res.status(201).json(nuevo);
};

exports.updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ msg: 'No encontrado' });
    await proveedor.update(req.body);
    res.json(proveedor);
  } catch (error) {
    console.error('Error al actualizar proveedor:', error);
    res.status(400).json({ error: 'Error al actualizar el proveedor', details: error.message });
  }
};

exports.deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ msg: 'No encontrado' });
    await proveedor.destroy();
    res.json({ msg: 'Proveedor eliminado' });
  } catch (error) {
    console.error('Error al eliminar proveedor:', error);
    res.status(400).json({ error: 'Error al eliminar el proveedor', details: error.message });
  }
};