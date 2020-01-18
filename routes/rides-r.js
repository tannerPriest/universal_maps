const router = require('express').Router();
const rideCtrl = require('../controllers/ride');

const isUser = (req, res, next) => {
  // if(req.user){
      next()
  // } else {
  //     res.redirect('/users')
  // }
}

router.get('/new/:id', isUser, rideCtrl.show)

router.post('/:id', isUser, rideCtrl.newReview)

module.exports = router;