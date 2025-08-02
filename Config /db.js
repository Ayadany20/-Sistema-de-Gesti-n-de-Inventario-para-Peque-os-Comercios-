const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Inventario', 'inventario_user', 'Valearte1113', {
  host: 'LAPTOP-GLD9PR5P',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      instanceName: 'SQLEXPRESS',
      encrypt: false,
      trustServerCertificate: false
    }
  },
  port: 1433,
  logging: false
});

module.exports = sequelize;
