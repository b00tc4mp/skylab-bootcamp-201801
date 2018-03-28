const { User, League, Team, Match, Result, Stats } = require('../models')
const validate = require('./validate')
const uuid = require('uuid/v4')
const mongoose = require('mongoose')

module.exports = {

    listUsers() {
        return User.find({}, { _id: 1, id: 1, name: 1, surname: 1, email: 1, username: 1 })
    },


    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return User.findOne({ _id: id }, { _id: 1, name: 1, username: 1, email: 1, position: 1, stats: 1 })
            })
            .then((user) => {
                if (!user) throw Error('user does not exist')

                return user
            })

    },


    createUser(name, surname, email, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error(` ${email}  already exists`)

                return User.create({ name, surname, email, username, password })
                    .then(user => user._id)
            })
    },


    validateUser(email, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ email, username, password })
            })
            .then(() => {

                return User.findOne({ email, username, password })
            })
            .then(user => {
                if (!user) throw Error(`mail, user or password are wrong`)

                return user
            })
    },


    listLeagues() {
        return League.find({}, { _id: 1, creator: 1, name: 1, city: 1, club: 1, type: 1, category: 1, maxplayers: 1, date: 1, players: 1, teams: 1, matches: 1 })
    },


    searchLeagues(query) {
        return League.find({ $or: [{ city: new RegExp(query, 'i') }, { club: new RegExp(query, 'i') }] }, { _id: 1, creator: 1, name: 1, city: 1, type: 1, category: 1, maxplayers: 1, players: 1 })

    },


    retrieveLeague(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return League.findOne({ _id: id }).populate({ path: 'players' })
            })
            .then(league => {
                if (!league) throw Error(`this league with id ${id} does not exist`)

                return league
            })
    },


    listUserLeagues(idUser) {
        return Promise.resolve()
            .then(() => {

                return League.find({ creator: idUser })

            })
            .then(league => {
                return league
            })

    },


    createLeague(id, name, city, club, category, type, date, maxplayers) {
        return Promise.resolve()
            .then(() => {
                validate({ name, city, club })

                return League.findOne({ name })
            })
            .then(league => {
                if (league) throw Error(`${name} already exists`)
                const creator = mongoose.mongo.ObjectId(id)
                const date = new Date()
                return League.create({ creator, name, city, club, category, type, date, maxplayers })
                    .then(league => league._id)
            })
    },


    updateLeague(idLeague, name, city, club, category, type, date, maxplayers) {
        return League.findByIdAndUpdate({ _id: idLeague }, { $set: { name, city, club, category, type, date, maxplayers } })
    },


    removeLeague(idLeague) {
        return League.findByIdAndRemove({ _id: idLeague })
    },


    addPlayerToLeague(idLeague, idPlayer) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague, idPlayer })

                return League.findOne({ _id: idLeague }, { _id: 1, maxplayers: 1, players: 1 })
            })
            .then(league => {
                //console.log(league)
                if (!league) throw Error("That league does not exist")

                if (league.players.length == league.maxplayers) throw Error("League is completed")
                if (league.players.indexOf(idPlayer) !== -1) throw Error("This player already exist in this league")
                //if(league.players)

                return League.update({ _id: idLeague }, { $push: { players: idPlayer } })
                    .then(() => League.findOne({ _id: idLeague }).populate({ path: 'players' }))

            })
    },


    removePlayerFromLeague(idLeague, idPlayer) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague, idPlayer })

                return League.findOne({ _id: idLeague }, { _id: 1, players: 1 })
            })
            .then(league => {
                //console.log(league)
                if (!league) throw Error("That league does not exist")

                if (league.players.length == 0) throw Error("The league has no players")

                return League.update({ _id: idLeague }, { $pullAll: { players: [idPlayer] } })
                    .then(() => League.findOne({ _id: idLeague }).populate({ path: 'players' }))
            })
    },


    generateTeams(idLeague) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague })
                return League.findOne({ _id: idLeague }, { _id: 1, maxplayers: 1, players: 1, teams: 1 })
            })
            .then(league => {

                if (league.players.length < 4) throw Error("Number of players should be at least 4 or more")
                if ((league.players.length) % 2 != 0) throw Error("Players should be at list pairs")
                if ((league.teams.length) >= (league.players.length / 2)) throw Error("Teams are already complete")
                if (league.players.length != league.maxplayers) throw Error("To generate teams, league should be completed")
                if (league.teams.length > 0) throw Error("Teams are already generated")

                const teamsCompleted = league.players.reduce((result, value, index, array) => {
                    if (index % 2 === 0)
                        result.push(array.slice(index, index + 2));
                    return result;
                }, []);

                const teams = []
                teamsCompleted.forEach((team, index) => {
                    const players = team
                    const teamModel = new Team({ name: "Team " + (index + 1), players })
                    teams.push(teamModel)
                })

                return League.update({ _id: idLeague }, { $push: { teams } })
                    .then(() => League.findOne({ _id: idLeague }))
            })
    },

    removeTeams(idLeague) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague })
                return League.findOne({ _id: idLeague }, { _id: 1, maxplayers: 1, players: 1, teams: 1, matches: 1 })
            })
            .then(league => {

                if ((league.teams.length) == 0) throw Error("There are no teams to delete")
                const teamsEmpty = []
                const matchesEmpty = []
                return League.update({ _id: idLeague }, { teams: teamsEmpty, matches: matchesEmpty })
                    .then(() => League.findOne({ _id: idLeague }))


            })

    },

    editTeams(idLeague, teams) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague })
                return League.update({ _id: idLeague }, { teams})
            })

    },

    generateMatches(idLeague) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague })
                return League.findOne({ _id: idLeague }, { teams: 1 })

                    .then(leagueWithTeams => {
                        const matches = createMatches(leagueWithTeams.teams)

                        return League.update({ _id: idLeague }, { matches })
                            .then(() => League.findOne({ _id: idLeague }))
                    })
            })
    },

    removeMatches(idLeague) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague })
                return League.findOne({ _id: idLeague }, { _id: 1, matches: 1 })
            })
            .then(league => {
                if (league.matches.length === 0) throw Error('There are no matches to remove')
                const matchesEmpty = []

                return League.update({ _id: idLeague }, { matches: matchesEmpty })
                    .then(() => League.findOne({ _id: idLeague }))
            })
    },

    editMatchResult(idLeague, idMatch, idTeamWinner, gamesTeamWinner, idTeamLoser, gamesTeamLoser) {
        return Promise.resolve()
            .then(() => {
                validate({ idLeague, idMatch })
                return League.findOne({ _id: idLeague })
                    .then(league => {
                        let idWinner
                        let gamesWinner
                        let idLoser
                        let gamesLoser

                        if (gamesTeamWinner > gamesTeamLoser) {
                            idWinner = idTeamWinner
                            gamesWinner = gamesTeamWinner
                            idLoser = idTeamLoser
                            gamesLoser = gamesTeamLoser
                        } else {
                            idWinner = idTeamLoser
                            gamesWinner = gamesTeamLoser
                            idLoser = idTeamWinner
                            gamesLoser = gamesTeamWinner
                        }

                        const match = league.matches.id(idMatch)
                        const resultModel = new Result({ winner: { team: idWinner, games: gamesWinner }, loser: { team: idLoser, games: gamesLoser } })
                        match.result = resultModel
                        return league.save()
                    })
            })
    }

}


function createMatches(teams) {
    const numberOfTeams = teams.length
    const matches = []
    for (let i = 0; i < numberOfTeams; i++) {
        for (let j = i + 1; j < numberOfTeams; j++) {
            const match = new Match({})

            match.teams = []

            match.teams.push(teams[i]._id)
            match.teams.push(teams[j]._id)

            matches.push(match)
        }
    }
    return matches
}
