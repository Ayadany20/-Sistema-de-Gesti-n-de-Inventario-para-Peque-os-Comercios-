const sequelize = require('../config/db'); // Sube un nivel al archivo db.js

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión exitosa a SQL Server');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error al conectar:', err.message);
    process.exit(1);
  });