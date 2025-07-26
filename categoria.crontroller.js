const { Categoria } = require('../models');

exports.getCategorias = async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
};

exports.getCategoriaById = async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ msg: 'No encontrada' });
  res.json(categoria);
};

exports.createCategoria = async (req, res) => {
  const nueva = await Categoria.create(req.body);
  res.status(201).json(nueva);
};

exports.updateCategoria = async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ msg: 'No encontrada' });
  await categoria.update(req.body);
  res.json(categoria);
};

exports.deleteCategoria = async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ msg: 'No encontrada' });
  await categoria.destroy();
  res.json({ msg: 'Eliminada' });
};
