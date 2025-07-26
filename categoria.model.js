const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('categoria', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT
}, {
  tableName: 'categoria',
  timestamps: false
});

module.exports = Categoria;
