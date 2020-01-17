const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./users-v/sign-in', {
    title: 'Sign-In',
    user: req.user,
  })
});

module.exports = router;
