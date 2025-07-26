const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  rol: {
    type: DataTypes.ENUM('admin', 'empleado') // Ajusta según los valores reales
  },
  contraseña: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'usuario',
  timestamps: false
});

module.exports = Usuario;
