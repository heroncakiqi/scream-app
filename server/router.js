const express = require('express');
const router = express.Router();
const passportSevice = require('./services/passport');
const passport = require('passport');

// controllers and middlewares
const authentication = require('./controllers/authentication');
const requireAuth = passport.authenticate('jwt', {session: false });
const requireSignin = passport.authenticate('local', { session: false })

// signup route
router.post('/signup',authentication.validateSingup, authentication.signup);

// login route
router.post('/login', authentication.login);


module.exports = router;