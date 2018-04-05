const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: { type: String, default: 'Team' },
    players: [{
        type: ObjectId, ref: 'User'
    }]
})