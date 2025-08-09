const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config();
const { sequelize } = require('./models');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const configPassport = require('./config/passport');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Configurar sesión
app.use(session({
  secret: 'supersecreto', // Cambia esto por algo más seguro en producción
  resave: false,
  saveUninitialized: false
}));

// Configurar passport
app.use(passport.initialize());
app.use(passport.session());
configPassport(passport);

// Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile, { async: true });
app.use(express.static('public'));

// Importación de rutas API
const usuariosRoutes = require('./routes/usuario.routes');
const productosRoutes = require('./routes/producto.routes');
const categoriasRoutes = require('./routes/categoria.routes');
const proveedoresRoutes = require('./routes/proveedor.routes');
const skuProductoRoutes = require('./routes/sku_producto.routes');
const movimientosRoutes = require('./routes/movimiento.routes');
const alertasRoutes = require('./routes/alerta.routes');

// Aplicar rutas API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/sku-productos', skuProductoRoutes);
app.use('/api/movimientos', movimientosRoutes);
app.use('/api/alertas', alertasRoutes);

// Rutas de autenticación
const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes);

// Middleware de autenticación
const ensureAuthenticated = require('./middlewares/auth');

// Controladores para vistas
const productoController = require('./controllers/producto.controller');
const proveedorController = require('./controllers/proveedor.controller');
const movimientoController = require('./controllers/movimiento.controller');
const alertaController = require('./controllers/alerta.controller');

// Rutas protegidas con sesión
app.get('/productos', ensureAuthenticated, productoController.renderProductosVista);
app.get('/proveedores', ensureAuthenticated, proveedorController.renderProveedoresVista);
app.get('/movimientos', ensureAuthenticated, movimientoController.renderMovimientosVista);
app.get('/alertas', ensureAuthenticated, alertaController.renderAlertasVista);
app.get('/info', ensureAuthenticated, (req, res) => res.render('info'));
app.get('/usuarios', ensureAuthenticated, (req, res) => res.render('usuarios'));

// Ruta base
app.get('/', (req, res) => res.send('✅ API Tienda de Abarrotes funcionando'));

// Puerto
const PORT = process.env.PORT || 3000;

// Sincronización y arranque del servidor
sequelize.sync()
  .then(() => {
    console.log('🔗 Base de datos conectada y sincronizada');
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => {
    console.error('❌ Error al conectar/sincronizar la base de datos:', err);
  });
