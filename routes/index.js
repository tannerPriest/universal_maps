const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexRouter = require('../controllers/index')
/* GET home page. */
router.get('/', indexRouter.index);
router.get('/auth/google', passport.authenticate(
   'google',
   { scope: ['profile', 'email'] }
 ));
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/main',
      failureRedirect : '/users'
    }
  ));
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;