const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Alerta = sequelize.define('alerta', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  producto_id: DataTypes.INTEGER,
  fecha: DataTypes.DATE,
  mensaje: DataTypes.TEXT,
  atendida: DataTypes.BOOLEAN,
  usuario_id: DataTypes.INTEGER
}, {
  tableName: 'alerta',
  timestamps: false
});

module.exports = Alerta;
