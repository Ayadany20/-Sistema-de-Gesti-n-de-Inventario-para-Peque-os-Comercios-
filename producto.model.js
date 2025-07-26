const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('producto', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  precio: DataTypes.DECIMAL,
  stock: DataTypes.INTEGER,
  stock_minimo: DataTypes.INTEGER,
  categoria_id: DataTypes.INTEGER,
  proveedor_id: DataTypes.INTEGER,
  usuario_id: DataTypes.INTEGER
}, {
  tableName: 'producto',
  timestamps: false
});

module.exports = Producto;
