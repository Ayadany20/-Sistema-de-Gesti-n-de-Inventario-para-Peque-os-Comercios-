const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Inventario', 'inventario_user', 'Gestor1234', {
  host: 'LUIS18',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      instanceName: 'LUISSQLSERVER',
      encrypt: false,
      trustServerCertificate: true,
    }
  },
  port: 1433,
  logging: console.log, // Mostrar consultas SQL en consola
});

module.exports = sequelize;