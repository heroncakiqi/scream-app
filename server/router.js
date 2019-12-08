const express = require('express');
const router = express.Router();
const passportSevice = require('./services/passport');
const passport = require('passport');

// controllers and middlewares
const authentication = require('./controllers/authentication');
const requireAuth = passport.authenticate('jwt', {session: false });
const requireSignin = passport.authenticate('local', { session: false });
const scream = require('./controllers/scream');
const comment = require('./controllers/comment');

// signup route
router.post('/signup',authentication.validateSingup, authentication.signup);

// login route
router.post('/login', authentication.login);

// get the logedin user
router.get('/user', requireAuth, authentication.user)

// get screams
router.get('/screams', requireAuth, scream.getScreams);

// post scream
router.post('/scream', requireAuth, scream.postScream);

// get single scream
router.get('/scream/:id', requireAuth, scream.getSingleScream);

// like/unlike scream
router.post('/scream/like/:id', requireAuth, scream.likeScream);

// post comment
router.post('/comment/:screamId', requireAuth, comment.postComment);


module.exports = router;