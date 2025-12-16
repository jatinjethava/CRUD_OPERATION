const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const USER = mongoose.model('users', moduleSchema);
module.exports = USER;