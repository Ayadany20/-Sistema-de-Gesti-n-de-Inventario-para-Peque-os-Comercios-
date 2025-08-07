const { Alerta, Usuario } = require('../models');

exports.renderAlertasVista = async (req, res) => {
  try {
    const alertas = await Alerta.findAll({
      include: [
        { model: Usuario, as: 'Usuario' }
      ],
      order: [['fechaAlerta', 'DESC']]
    });
    res.render('alertas', { 
      alertas: alertas || []
    });
  } catch (error) {
    console.error('Error al cargar alertas:', error);
    res.status(500).render('alertas', { 
      alertas: [],
      error: 'Error al cargar los datos'
    });
  }
};

exports.getAlertas = async (req, res) => {
  const alertas = await Alerta.findAll();
  res.json(alertas);
};

exports.getAlertaById = async (req, res) => {
  const alerta = await Alerta.findByPk(req.params.id);
  if (!alerta) return res.status(404).json({ msg: 'No encontrada' });
  res.json(alerta);
};

exports.createAlerta = async (req, res) => {
  const nueva = await Alerta.create(req.body);
  res.status(201).json(nueva);
};

exports.updateAlerta = async (req, res) => {
  const alerta = await Alerta.findByPk(req.params.id);
  if (!alerta) return res.status(404).json({ msg: 'No encontrada' });
  await alerta.update(req.body);
  res.json(alerta);
};

exports.deleteAlerta = async (req, res) => {
  const alerta = await Alerta.findByPk(req.params.id);
  if (!alerta) return res.status(404).json({ msg: 'No encontrada' });
  await alerta.destroy();
  res.json({ msg: 'Alerta eliminada' });
};
