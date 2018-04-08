const { Schema } = require('mongoose')
const Comment = require('./Comment')

module.exports = new Schema({
    url: {
        type: String,
        required: true
    },
    comments: [Comment],
    likes: Number
})