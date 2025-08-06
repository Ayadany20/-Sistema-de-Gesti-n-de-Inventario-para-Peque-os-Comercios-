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
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Producto.belongsTo(Proveedor, { foreignKey: 'proveedorId' });
Producto.belongsTo(Usuario, { foreignKey: 'usuarioId' });

SkuProducto.belongsTo(Producto, { foreignKey: 'productoId' });

Movimiento.belongsTo(Producto, { foreignKey: 'productoId' });
Movimiento.belongsTo(Proveedor, { foreignKey: 'proveedorId' });

Alerta.belongsTo(Usuario, { foreignKey: 'usuarioId' });

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