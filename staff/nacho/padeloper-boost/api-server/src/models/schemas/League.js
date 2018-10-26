const mongoose = require('mongoose')
const Team = require('./Team')
const Match = require('./Match')
const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    creator: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    name: String,
    city: String,
    club: String,
    category: String,
    type: String,
    date: Date,
    maxplayers: Number,
    players: [{
        type: ObjectId, ref: 'User'
    }],
    teams: [Team],
    matches: [Match]
})