const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

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