const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SkuProducto = sequelize.define('SkuProducto', {
  skuId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  productoId: { type: DataTypes.INTEGER, allowNull: true },
  codigosku: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.STRING(100), allowNull: false },
  precio: { type: DataTypes.DECIMAL(10, 1), allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  stockMinimo: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'SkuProducto',
  timestamps: false
});

module.exports = SkuProducto;