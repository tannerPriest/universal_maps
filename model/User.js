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
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    googleId: String,
    itinerary: [{
        type: Schema.Types.ObjectId,
        ref: 'Ride'
    }],
    content: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

module.exports = mongoose.model('User', userSchema)