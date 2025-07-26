const { Proveedor } = require('../models');

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
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ msg: 'No encontrado' });
  await proveedor.update(req.body);
  res.json(proveedor);
};

exports.deleteProveedor = async (req, res) => {
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ msg: 'No encontrado' });
  await proveedor.destroy();
  res.json({ msg: 'Eliminado' });
};
