const mongoose = require('mongoose')
const { Schema } = mongoose
const Stats = require('./Stats')

module.exports = new Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    position: { type: String, default: 'left' },
    level: { type: Number, default: 3 },
    stats: Stats
})