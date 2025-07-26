const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SkuProducto = sequelize.define('sku_producto', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  producto_id: DataTypes.INTEGER,
  codigo_sku: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  precio: DataTypes.DECIMAL,
  stock: DataTypes.INTEGER,
  stock_minimo: DataTypes.INTEGER
}, {
  tableName: 'sku_producto',
  timestamps: false
});

module.exports = SkuProducto;
