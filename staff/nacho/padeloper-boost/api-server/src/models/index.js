const mongoose = require('mongoose')

const { User, Stats, League, Match, Team, Result } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Stats: mongoose.model('Stats', Stats),
    League: mongoose.model('League', League),
    Match: mongoose.model('Match', Match),
    Team: mongoose.model('Team', Team),
    Result: mongoose.model('Result', Result)
}