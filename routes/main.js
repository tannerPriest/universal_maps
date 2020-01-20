const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/main-c.js')

const isUser = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.redirect('/users')
    }
}

router.get('/', isUser, mainCtrl.index)

module.exports = router;
