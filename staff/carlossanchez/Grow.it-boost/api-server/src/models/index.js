const mongoose = require('mongoose')

const { User, Orchard, Plantation } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Orchard: mongoose.model('Orchard', Orchard),
    Plantation: mongoose.model('Plantation', Plantation)
}