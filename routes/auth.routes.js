const express = require('express');
const passport = require('passport');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/login', (req, res) => res.render('login'));
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/productos',
    failureRedirect: '/login'
  })
);

router.get('/registro', (req, res) => res.render('registro'));
router.post('/registro', authController.registro);
router.get('/logout', authController.logout);

module.exports = router;
