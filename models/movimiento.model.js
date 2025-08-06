const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Movimiento = sequelize.define('movimiento', {
  movimientoId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tipomovimiento: { type: DataTypes.STRING(100), allowNull: false },
  cantidad: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  precioProducto: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  proveedorId: { type: DataTypes.INTEGER, allowNull: true },
  productoId: { type: DataTypes.INTEGER, allowNull: true }
}, {
  tableName: 'movimiento',
  timestamps: false
});

module.exports = Movimiento;