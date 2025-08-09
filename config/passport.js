const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario.model');

function configPassport(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email', // ← el campo de login será email
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      const user = await Usuario.findOne({ where: { email } });
      if (!user) return done(null, false, { message: 'Usuario no encontrado' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: 'Contraseña incorrecta' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.usuarioId); // ← tu PK se llama usuarioId
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Usuario.findByPk(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}

module.exports = configPassport;
