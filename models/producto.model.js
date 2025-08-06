const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('Productos', {
  productoId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameProducto: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  precio: DataTypes.DECIMAL,
  stock: DataTypes.INTEGER,
  stockMinimo: DataTypes.INTEGER,
  proveedorId: DataTypes.INTEGER,
  categoriaId: DataTypes.INTEGER,
  usuarioId: DataTypes.INTEGER
}, {
  tableName: 'Productos',
  timestamps: false
});

module.exports = Producto;