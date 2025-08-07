// models/index.js

const sequelize = require('../config/db');

const Usuario = require('./Usuario.model');
const Producto = require('./producto.model');
const Categoria = require('./categoria.model');
const Proveedor = require('./proveedor.model');
const Alerta = require('./alerta.model');
const Movimiento = require('./movimiento.model');
const SkuProducto = require('./sku_producto.model');

// Relaciones
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'Categoria' });
Producto.belongsTo(Proveedor, { foreignKey: 'proveedorId', as: 'Proveedor' });
Producto.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Relaciones inversas
Proveedor.hasMany(Producto, { foreignKey: 'proveedorId', as: 'Productos' });
Categoria.hasMany(Producto, { foreignKey: 'categoriaId', as: 'Productos' });

SkuProducto.belongsTo(Producto, { foreignKey: 'productoId' });

Movimiento.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' });
Movimiento.belongsTo(Proveedor, { foreignKey: 'proveedorId', as: 'Proveedor' });

Alerta.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'Usuario' });

module.exports = {
  sequelize,
  Usuario,
  Producto,
  Categoria,
  Proveedor,
  Alerta,
  Movimiento,
  SkuProducto
};