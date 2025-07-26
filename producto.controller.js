const { Producto, Categoria, Proveedor } = require('../models');

exports.getProductos = async (req, res) => {
  const productos = await Producto.findAll({ include: [Categoria, Proveedor] });
  res.json(productos);
};

exports.getProductoById = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id, { include: [Categoria, Proveedor] });
  if (!producto) return res.status(404).json({ msg: 'No encontrado' });
  res.json(producto);
};

exports.createProducto = async (req, res) => {
  const nuevo = await Producto.create(req.body);
  res.status(201).json(nuevo);
};

exports.updateProducto = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) return res.status(404).json({ msg: 'No encontrado' });
  await producto.update(req.body);
  res.json(producto);
};

exports.deleteProducto = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) return res.status(404).json({ msg: 'No encontrado' });
  await producto.destroy();
  res.json({ msg: 'Producto eliminado' });
};
