const { Producto, Categoria, Proveedor } = require('../models');
const { Op } = require('sequelize');

exports.renderProductosVista = async (req, res) => {
  try {
    const [productos, categorias, proveedores] = await Promise.all([
      Producto.findAll({ include: [Categoria, Proveedor] }),
      Categoria.findAll(),
      Proveedor.findAll()
    ]);
    res.render('productos', { 
      productos,
      categorias,
      proveedores
    });
  } catch (error) {
    console.error('Error al cargar productos:', error);
    res.status(500).render('productos', { 
      productos: [],
      categorias: [],
      proveedores: [],
      error: 'Error al cargar los datos'
    });
  }
};

exports.getAll= async (req, res) => {
  try {
    const productos = await Producto.findAll({ include: [Categoria, Proveedor] });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({ include: [Categoria, Proveedor] });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id, { include: [Categoria, Proveedor] });
    if (!producto) return res.status(404).json({ msg: 'No encontrado' });
    res.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(400).json({ error: 'Error al crear el producto', details: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ msg: 'No encontrado' });
    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(400).json({ error: 'Error al actualizar el producto', details: error.message });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ msg: 'No encontrado' });
    await producto.destroy();
    res.json({ msg: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(400).json({ error: 'Error al eliminar el producto', details: error.message });
  }
};