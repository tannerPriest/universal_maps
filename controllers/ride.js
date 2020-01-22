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
            if (err) return console.log("GETTING TO reviewModel.create ERROR"), res.status(400), res.send('error');
            ride.content.push(review);
            ride.save();
            req.user.content.push(review);
            req.user.save();
            res.status(200);
            res.redirect(`/${ride.lotSection}/${ride._id}`)
        })
    })
}
const editReview = (req, res) => {
    Ride.find({ content: req.params.id }, (err, rideReview) => {
        Review.findById(req.params.id, (err, review) => {
            res.render('review/edit', { title: 'Review Edit Page', user: req.user, review, ride: rideReview[0] })
        })
    })
}
const updateReview = (req, res) => {
    Ride.find({ content: req.params.id }, (err, ride) => {
        Review.findById(req.params.id, (err, review) => {
            review.content = req.body.content
            review.save();
            res.redirect(`/${ride[0].lotSection}/${ride[0]._id}`)
        })
    })
}
const deleteReview = (req, res) => {
    User.findById(req.user).exec((err, user) => {
        let array = user.content
        array.splice(array.indexOf(req.params.id), 1);
        user.save()
    })
    Ride.find({ content: req.params.id }, (err, ride) => {
        let array = ride[0].content
        array.splice(array.indexOf(req.params.id), 1);
        ride[0].save()
        Review.deleteOne({ _id: req.params.id }, function (err) {
            res.redirect(`/${ride[0].lotSection}/${ride[0]._id}`)
        });
    })
}
module.exports = {
    show,
    newReview,
    editReview,
    updateReview,
    deleteReview
}