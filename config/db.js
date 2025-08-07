const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Inventario', '*****', '*****', {
  host: '****',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      instanceName: '******',
      encrypt: false,
      trustServerCertificate: true,
    }
  },
  port: 1433,
  logging: console.log, // Mostrar consultas SQL en consola
});

module.exports = sequelize;
