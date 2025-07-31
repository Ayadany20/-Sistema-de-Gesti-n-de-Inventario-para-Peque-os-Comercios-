const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuario', {
  usuarioId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false },
  rol: { type: DataTypes.STRING(100), allowNull: false },
  password: { type: DataTypes.STRING(50), allowNull: false }
}, {
  tableName: 'usuario',
  timestamps: false
});

module.exports = Usuario;
