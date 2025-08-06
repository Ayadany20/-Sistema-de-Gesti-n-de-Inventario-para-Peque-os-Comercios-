const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('proveedor', {
  proveedorId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameproveedor: { type: DataTypes.STRING(100), allowNull: false },
  contacto: { type: DataTypes.STRING(100), allowNull: false },
  direccion: { type: DataTypes.STRING(150), allowNull: false }
}, {
  tableName: 'proveedor',
  timestamps: false
});

module.exports = Proveedor;