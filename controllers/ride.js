const Ride = require('../model/ride-m');
const User = require('../model/User');
const Review = require('../model/review');

const show = (req, res) => {
    Ride.findById(req.params.id, (err, ride) => {
        if (err) return res.render('error').status(400)
        res.render('review/new', { title: `Add a Review to ${ride.name}`, ride, user: req.user })
    })
}
const newReview = (req, res) => {
    const review = new Review(req.body)
    review.save(err => {
        Ride.findById(req.params.id, (err, ride) => {
            console.log(typeof review)
            ride.content.push(review._id);
            ride.save();
            User.findById(req.user, (err, user) => {
                user.content.push(review._id)
                user.save();
            })
            if (err) return console.log("GETTING TO reviewModel.create ERROR"), res.status(400), res.send('error');
            res.status(200);
            res.redirect(`/${ride.lotSection}/${ride._id}`)
        })
    })
}
module.exports = {
    show,
    newReview
}