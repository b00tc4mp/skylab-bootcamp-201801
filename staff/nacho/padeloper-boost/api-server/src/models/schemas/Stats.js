const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = new Schema({
    league: {
        created: Number,
        joined: Number
    },
    matches: {
        win: Number,
        lost: Number
    },
    sets: {
        win: Number,
        lost: Number
    },
    games: {
        win: Number,
        lost: Number
    },
    level: { type: Number, default: 3 }
})