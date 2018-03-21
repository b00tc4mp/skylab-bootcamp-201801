const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    comment: String,
    rating: {
        type:Number,
        min:1,
        max:5
    }

});




const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    comments: [Comment]
});

const Trip = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    passengers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = {
    User: mongoose.model('User', User),
    Trip: mongoose.model('Trip', Trip),
    Comment: mongoose.model('Comment', Comment)
}