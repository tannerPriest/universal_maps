const rideModel = require('../model/ride-m')

const show = (req, res) => {
    rideModel.find({ lotSection: 'lowerlot' }, (err, rides) => {
        res.render('maps-v/lower-1', { title: "Lower Lot!", user: req.user, rides})
    })
}
const ride = (req, res) => {
    rideModel.findById(req.params.id, (err, ride) => {
        res.render('maps-v/lowShow', {title: `${ride.name}`, user: req.user, ride, req})
    })
}
module.exports = {
    ride,
    show
}