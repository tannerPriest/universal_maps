const router = require('express').Router();
const rideCtrl = require('../controllers/ride');

const isUser = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect('/users')
  }
}

router.get('/new/:id', isUser, rideCtrl.show)

router.get('/review/:id', isUser, rideCtrl.editReview)

router.post('/:id', isUser, rideCtrl.newReview)

router.patch('/review/:id', isUser, rideCtrl.updateReview)

router.delete('/review/:id', isUser, rideCtrl.deleteReview)


module.exports = router;