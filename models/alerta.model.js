const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Alerta = sequelize.define('alerta', {
  alertaId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  mensaje: { type: DataTypes.STRING(100), allowNull: false },
  atendida: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  usuarioId: { type: DataTypes.INTEGER, allowNull: true }
}, {
  tableName: 'alerta',
  timestamps: false
});

module.exports = Alerta;