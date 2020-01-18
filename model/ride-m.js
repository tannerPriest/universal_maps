const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rideType:{
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    minHeight: {
        type: String,
        required: true
    },
    lotSection: {
        type: String,
        required: true
    },
    content: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
}
);

module.exports = mongoose.model('Ride', rideSchema);