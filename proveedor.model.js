const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('proveedor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  contacto: DataTypes.STRING,
  direccion: DataTypes.STRING
}, {
  tableName: 'proveedor',
  timestamps: false
});

module.exports = Proveedor;
