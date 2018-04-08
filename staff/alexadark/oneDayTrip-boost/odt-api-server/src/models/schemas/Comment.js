const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    user: {
        type: ObjectId, ref: 'User'
    },
    date: Date,
    commentText: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }

})