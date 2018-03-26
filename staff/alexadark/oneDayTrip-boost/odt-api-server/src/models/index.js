const mongoose = require('mongoose')
const { User, Trip, Comment } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Trip: mongoose.model('Trip', Trip),
    Comment: mongoose.model('Comment', Comment)
}