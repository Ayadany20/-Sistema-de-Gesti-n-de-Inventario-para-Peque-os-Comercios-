// middlewares/esAdmin.js
module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.rol === 'admin') {
    return next();
  }
  res.status(403).send('Acceso denegado');
};
