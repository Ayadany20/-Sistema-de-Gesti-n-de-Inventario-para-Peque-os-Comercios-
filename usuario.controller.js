const { Usuario } = require('../models');

exports.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.getUsuarioById = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });
  res.json(usuario);
};

exports.createUsuario = async (req, res) => {
  const nuevo = await Usuario.create(req.body);
  res.status(201).json(nuevo);
};

exports.updateUsuario = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ msg: 'No encontrado' });
  await usuario.update(req.body);
  res.json(usuario);
};

exports.deleteUsuario = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ msg: 'No encontrado' });
  await usuario.destroy();
  res.json({ msg: 'Usuario eliminado' });
};
