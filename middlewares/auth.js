function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // si no está logueado, lo manda al login
}

module.exports = ensureAuthenticated;
