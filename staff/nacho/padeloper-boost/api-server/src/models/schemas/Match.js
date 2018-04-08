const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose
const Result = require('./Result')

module.exports = new Schema({
    teams: [{
        type: ObjectId,
        ref: 'Team'
    }],
    result: Result,
    date: {
        type: Date,
        default: Date.now()
    }
})