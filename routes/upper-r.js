const express = require('express');
const router = express.Router();
const upperCtrl = require('../controllers/upper-c.js');

const isUser = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.redirect('/users')
    }
}

router.get('/', isUser, upperCtrl.show);
router.get('/:id', isUser, upperCtrl.ride);


module.exports = router;