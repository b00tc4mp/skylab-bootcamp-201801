const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    from: {
        type: String,
        required: true,
        trim: true
    },
    to: {
        type: String,
        required: true,
        trim: true
    },
    meetingPoint: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    departureDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: Date,
        required: true,
    },
    seats: {
        type: Number,
        min: 1
    },
    distance: {
        type: Number,
        required: true,
    },
    tripTime: Number,
    description: String,
    creator: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    passengers: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ]
})