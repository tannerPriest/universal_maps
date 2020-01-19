const Ride = require('../model/ride-m')
const Review = require('../model/review')
const User = require('../model/User')

const show = (req, res) => {
    Ride.find({ lotSection: 'lowerlot' }, (err, rides) => {
        res.render('maps-v/lower-1', { title: "Lower Lot!", user: req.user, rides })
    })
}
const ride = (req, res) => {
    Ride.findById(req.params.id).populate('content').exec((err, ride) => {
        User.findById(req.user).populate('content').exec((err, review) => {
            if (err) return console.log(err)
            Review.find({ _id: { $nin: ride.content } }, (err, content) => {
                    if (err) return res.render('error').status(400)
                    console.log(content)
                    res.render('maps-v/lowShow', { title: `${ride.name}`, ride, user: req.user, review, content })
            })
        })
    })
}
module.exports = {
    ride,
    show
}

