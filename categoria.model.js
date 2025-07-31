const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('categoria', {
  categoriaId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  namecategoria: { type: DataTypes.STRING(100), allowNull: false },
  descripcioncategoria: { type: DataTypes.STRING(150), allowNull: false }
}, {
  tableName: 'categoria',
  timestamps: false
});

module.exports = Categoria;
