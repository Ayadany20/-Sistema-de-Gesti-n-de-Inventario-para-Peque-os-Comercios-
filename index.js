const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config();
const { sequelize } = require('./models');
const path = require('path');


const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ← para leer datos de formularios
app.use(methodOverride('_method')); // ← para soportar PUT y DELETE en formularios HTML


// Configuración de EJS
app.set('view engine', 'ejs'); // ← motor de plantillas EJS
app.set('views', path.join(__dirname, 'views')); // ← carpeta de vistas
app.engine('ejs', require('ejs').renderFile, { async: true }); // ← motor de plantillas EJS
app.use(express.static('public')); // ← para archivos estáticos (CSS, JS, imágenes, etc.)

// Importación de rutas
const usuariosRoutes = require('./routes/usuario.routes');
const productosRoutes = require('./routes/producto.routes');
const categoriasRoutes = require('./routes/categoria.routes');
const proveedoresRoutes = require('./routes/proveedor.routes');
const skuProductoRoutes = require('./routes/sku_producto.routes');
const movimientosRoutes = require('./routes/movimiento.routes');
const alertasRoutes = require('./routes/alerta.routes');

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/sku-productos', skuProductoRoutes);
app.use('/api/movimientos', movimientosRoutes);
app.use('/api/alertas', alertasRoutes);


//rutas vistas
const productoController = require('./controllers/producto.controller');
app.get('/productos', productoController.renderProductosVista);
app.get('/categorias', (req, res) => res.render('categorias'));
app.get('/proveedores', (req, res) => res.render('proveedores'));
app.get('/movimientos', (req, res) => res.render('movimientos'));
app.get('/alertas', (req, res) => res.render('alertas'));
app.get('/info', (req, res) => res.render('info'));
app.get('/usuarios', (req, res) => res.render('usuarios'));

// Ruta base
app.get('/', (req, res) => res.send('✅ API Tienda de Abarrotes funcionando'));

// Puerto desde .env o por defecto 3000
const PORT = process.env.PORT || 3000;

// Sincronización y arranque
sequelize.sync()
  .then(() => {
    console.log('🔗 Base de datos conectada y sincronizada');
    
    // Insertar datos de prueba si no existen (comentado porque ya hay datos)
    // await insertSeedData();
    
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => {
    console.error('❌ Error al conectar/sincronizar la base de datos:', err);
  });