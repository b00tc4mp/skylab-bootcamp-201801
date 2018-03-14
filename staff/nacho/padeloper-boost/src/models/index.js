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
    level: Number
})

const User = new Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    stats: Stats
})


const Team = new Schema({
    name: String,
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
    teams: [Team],
    result: Result
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
    created: Date,
    players: [{ 
        type: ObjectId, ref: 'User' 
    }],
    teams: [Team],
    match: [Match]
})

module.exports = {
    User: mongoose.model('User', User),
    Stats: mongoose.model('Stats', Stats),
    League: mongoose.model('League', League),
    Match: mongoose.model('Match', Match),
    Team: mongoose.model('Team', Team),
    Result: mongoose.model('Result', Result)
}