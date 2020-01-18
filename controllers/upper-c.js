const rideModel = require('../model/ride-m');

const show = (req, res) => {
    rideModel.find({ lotSection: 'upperlot' }, (err, rides) => {
        res.render('maps-v/upper-1', { title: "The Upperlot!", user: req.user, rides,})
    })
}
const ride = (req, res) => {
    rideModel.findById(req.params.id, (err, ride) => {
        res.render('maps-v/upShow', {title: `${ride.name}`, user: req.user, ride, req})
    })
}
module.exports = {
    ride,
    show
}