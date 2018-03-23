const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

const Stats = new Schema({
    league: {
        created: Number,
        joined: Number
    },
    matches: {
        win: Number,
        lost: Number
    },
    sets: {
        win: Number,
        lost: Number
    },
    games: {
        win: Number,
        lost: Number
    },
    level: { type: Number, default: 3 }
})

const User = new Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    position: { type: String, default: 'left' },
    stats: Stats
})


const Team = new Schema({
    name: { type: String, default: 'Team' },
    players: [{
        type: ObjectId, ref: 'User'
    }]
})

const Result = new Schema({
    winner: {
        team: {
            type: ObjectId,
            ref: 'Team'
        },
        games: [Number]
    },
    loser: {
        team: {
            type: ObjectId,
            ref: 'Team'
        },
        games: [Number]
    }
})

const Match = new Schema({
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

const League = new Schema({
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

module.exports = {
    User: mongoose.model('User', User),
    Stats: mongoose.model('Stats', Stats),
    League: mongoose.model('League', League),
    Match: mongoose.model('Match', Match),
    Team: mongoose.model('Team', Team),
    Result: mongoose.model('Result', Result)
}