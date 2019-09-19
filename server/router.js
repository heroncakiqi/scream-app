const express = require('express');
const router = express.Router();
const passportSevice = require('./services/passport');
const passport = require('passport');

// controllers and middlewares
const authentication = require('./controllers/authentication');
const requireAuth = passport.authenticate('jwt', {session: false });
const requireSignin = passport.authenticate('local', { session: false });
const scream = require('./controllers/scream');

// signup route
router.post('/signup',authentication.validateSingup, authentication.signup);

// login route
router.post('/login', authentication.login);

// get screams
router.get('/screams', requireAuth, scream.getScreams);

// post scream
router.post('/scream', requireAuth, scream.postScream);

// get single scream
router.get('/scream/:id', requireAuth, scream.getSingleScream);

// like/unlike scream
router.post('/scream/like/:id', requireAuth, scream.likeScream);


module.exports = router;