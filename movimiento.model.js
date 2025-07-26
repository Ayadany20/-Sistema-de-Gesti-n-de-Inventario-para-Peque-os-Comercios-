const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Movimiento = sequelize.define('movimiento', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tipo: DataTypes.ENUM('entrada', 'salida'), // Ajusta los valores reales si difieren
  producto_id: DataTypes.INTEGER,
  proveedor_id: DataTypes.INTEGER,
  cantidad: DataTypes.INTEGER,
  precio: DataTypes.DECIMAL,
  fecha: DataTypes.DATE
}, {
  tableName: 'movimiento',
  timestamps: false
});

module.exports = Movimiento;
