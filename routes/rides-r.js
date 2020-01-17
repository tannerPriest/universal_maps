const router = require('express').Router();
const rideModel = require('../model/ride-m');

router.post('/', function(req, res, next){
    const ride = new rideModel(req.body)
    ride.save(function(err) {
      if (err) return console.log("GETTING TO rideModel.create ERROR"), res.status(400), res.send('error');
      res.status(200);
      res.send({message: `Made new ride ${req.body.name}`});
    })
})

module.exports = router;