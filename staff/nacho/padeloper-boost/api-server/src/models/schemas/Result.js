const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose
const Result = require('./Result')

module.exports = new Schema({
    winner: {
        team: {
            type: ObjectId,
            ref: 'Team'
        },
        games: Number
    },
    loser: {
        team: {
            type: ObjectId,
            ref: 'Team'
        },
        games: Number
    }
})