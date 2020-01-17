const express = require('express');
const router = express.Router();
const lowerCtrl = require('../controllers/lower-c.js')

const isUser = (req, res, next) => {
    // if(req.user){
        next()
    // } else {
    //     res.redirect('/users')
    // }
}
// isUser, 
router.get('/', isUser, lowerCtrl.show)
router.get('/:id', isUser, lowerCtrl.ride)

module.exports = router;
