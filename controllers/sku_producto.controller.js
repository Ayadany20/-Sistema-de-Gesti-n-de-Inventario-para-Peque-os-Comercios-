const { SkuProducto, Producto } = require('../models');

exports.getSkus = async (req, res) => {
  const skus = await SkuProducto.findAll({ include: Producto });
  res.json(skus);
};

exports.getSkuById = async (req, res) => {
  const sku = await SkuProducto.findByPk(req.params.id);
  if (!sku) return res.status(404).json({ msg: 'No encontrado' });
  res.json(sku);
};

exports.createSku = async (req, res) => {
  const nuevo = await SkuProducto.create(req.body);
  res.status(201).json(nuevo);
};

exports.updateSku = async (req, res) => {
  const sku = await SkuProducto.findByPk(req.params.id);
  if (!sku) return res.status(404).json({ msg: 'No encontrado' });
  await sku.update(req.body);
  res.json(sku);
};

exports.deleteSku = async (req, res) => {
  const sku = await SkuProducto.findByPk(req.params.id);
  if (!sku) return res.status(404).json({ msg: 'No encontrado' });
  await sku.destroy();
  res.json({ msg: 'Eliminado' });
};