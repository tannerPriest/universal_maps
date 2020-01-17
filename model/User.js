const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        min:6
    },
    date: {
        type: Date,
        default: Date.now
    },
    googleId: String,
    itinerary: [],
    favRides: [],
})

module.exports = mongoose.model('User', userSchema)