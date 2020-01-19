const express = require('express');
const router = express.Router();
const iCtrl = require('../controllers/user-c')

const isUser = (req, res, next) => {
  // if(req.user){
      next()
  // } else {
  //     res.redirect('/users')
  // }
}
router.get('/', function(req, res, next) {
  res.render('./users-v/sign-in', {
    title: 'Sign-In',
    user: req.user,
  })
});

router.get('/itinerary', isUser, iCtrl.itinerary)

router.post('/itinerary',isUser, iCtrl.add)

router.delete('/:id', isUser, iCtrl.delete)

module.exports = router;


