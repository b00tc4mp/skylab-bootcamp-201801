const mongoose = require('mongoose');

const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    lastName: String,
    address1: String,
    address2: String,
    telf: Number,
    email: String,
    nif: String,
    username: String,
    password: String,
    orders: { type: Schema.ObjectId, ref: 'orders' },
})

module.exports = mongoose.model('user', User)