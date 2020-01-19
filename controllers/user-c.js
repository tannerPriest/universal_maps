const User = require('../model/User')
const Ride = require('../model/ride-m')

const itinerary = (req, res, next) => {
  User.findById(req.user)
    .populate('itinerary').exec((err, rider) => {
      Ride.find({ _id: { $nin: rider.itinerary } }, (err, rides) => {
        res.render('users-v/itinerary', { title: "Itinerary Page", user: req.user, rider, rides })
      }
      )
    })
}
const add = (req, res) => {
  User.findById(req.user, (err, rider) => {
    if (err) { console.log(err) }
    rider.itinerary.push(req.body.rideId);
    rider.save(err => {
      res.redirect(`/users/itinerary`);
    })
  });
}
const deletePlan = (req, res) => {
  User.findById(req.user).exec((err, plan) => {
    let array = plan.itinerary
    array.splice(array.indexOf(req.params.id), 1);
    plan.save(err => {
      res.redirect(`/users/itinerary`);
    })
  })
}

module.exports = {
  itinerary,
  add,
  delete: deletePlan
  }