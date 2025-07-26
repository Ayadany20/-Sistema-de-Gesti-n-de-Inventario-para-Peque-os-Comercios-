const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/productos', require('./routes/producto.routes'));
app.use('/api/categorias', require('./routes/categoria.routes'));
app.use('/api/proveedores', require('./routes/proveedor.routes'));
app.use('/api/sku-productos', require('./routes/sku_producto.routes'));
app.use('/api/movimientos', require('./routes/movimiento.routes'));
app.use('/api/alertas', require('./routes/alerta.routes'));

app.get('/', (req, res) => res.send('API Tienda de Abarrotes ✅'));

// Conexión DB
sequelize.sync().then(() => {
  console.log('🔗 Base de datos conectada y sincronizada');
  app.listen(3000, () => console.log('🚀 Servidor corriendo en puerto 3000'));
});
