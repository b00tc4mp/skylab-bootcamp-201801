const mongoose = require('mongoose')
const { Schema: { ObjectId } } = mongoose
const assert = require('assert')
const { User, League, Team, Match, Result, Stats } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/padeloper-models-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach(() => {
        return Promise.all([
            User.remove(),
            League.remove()
        ])
    })

    describe('create a user', () => {
        let user

        before(done => {
            user = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                password: 'password'
            })

            user.save()
                .then(_user => user = _user)
                .then(() => done())
                .catch(done)
        })

        it('should create a user', () => {
            assert(user, 'should user been saved')
        })
    })


    describe('create a league', () => {
        let creator, league, player1, player2, player3, player4, team1, team2

        before(done => {
            creator = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-creator',
                password: 'password'
            })

            league = new League({
                creator: creator._id,
                name: 'name',
                city: 'city',
                club: 'club',
                category: 'category',
                type: 'type',
                created: new Date
            })

            player1 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player1',
                password: 'password'
            })

            player2 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player2',
                password: 'password'
            })

            player3 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player3',
                password: 'password'
            })

            player4 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player4',
                password: 'password'
            })

            Promise.all([
                creator.save()
                    .then(_creator => creator = _creator),
                player1.save()
                    .then(_player1 => player1 = _player1),
                player2.save()
                    .then(_player2 => player2 = _player2),
                player3.save()
                    .then(_player3 => player3 = _player3),
                player4.save()
                    .then(_player4 => player4 = _player4),
                league.save()
                    .then(_league => league = _league)
            ])
                .then(() => {
                    const id = league._id.toString()

                    return League.findOne({ _id: id })
                })
                .then(league => {
                    if (!league.players) league.players = []

                    league.players.push(player1._id)
                    league.players.push(player2._id)
                    league.players.push(player3._id)
                    league.players.push(player4._id)

                    return league.save()
                })
                .then(league => {
                    team1 = new Team({
                        name: 'los chachis',
                        players: [player1._id, player2._id]
                    })

                    team2 = new Team({
                        name: 'los chichos',
                        players: [player3._id, player4._id]
                    })

                    if (!league.teams) league.teams = []

                    league.teams.push(team1)
                    league.teams.push(team2)

                    return league.save()
                })
                .then(_league => {
                    league = _league

                    done()
                })
                .catch(done)
        })

        it('should create a league', () => {
            assert(creator, 'should creator been saved')

            assert(player1, 'should player1 been created')

            assert(player2, 'should player2 been created')

            assert(player3, 'should player3 been created')

            assert(player4, 'should player4 been created')

            assert(league, 'should league been saved')

            assert(league.players, 'should league have players')

            assert.equal(league.players.length, 4, 'should league have correct players number')

            const [player1_id, player2_id, player3_id, player4_id] = league.players

            assert.equal(player1_id.toString(), player1._id.toString(), 'should player 1 match')

            assert.equal(player2_id.toString(), player2._id.toString(), 'should player 2 match')

            assert.equal(player3_id.toString(), player3._id.toString(), 'should player 3 match')

            assert.equal(player4_id.toString(), player4._id.toString(), 'should player 4 match')

            assert(league.teams, 'should league have teams')

            assert.equal(league.teams.length, 2, 'should league have one team')

            const [_team1, _team2] = league.teams

            assert.equal(_team1._id.toString, team1._id.toString, 'should team 1 match')

            assert.equal(_team2._id.toString, team2._id.toString, 'should team 2 match')
        })
    })

    describe('create a league and populate players', () => {
        let creator, league, player1, player2, player3, player4, team1, team2

        function getPlayerById(league, playerId) {
            return league.players.find(player => {
                return player._id.toString() === playerId
            })
        }

        before(done => {
            creator = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-creator',
                password: 'password'
            })

            league = new League({
                creator: creator._id,
                name: 'name',
                city: 'city',
                club: 'club',
                category: 'category',
                type: 'type',
                created: new Date
            })

            player1 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player1',
                password: 'password'
            })

            player2 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player2',
                password: 'password'
            })

            player3 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player3',
                password: 'password'
            })

            player4 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email-player4',
                password: 'password'
            })

            Promise.all([
                creator.save()
                    .then(_creator => creator = _creator),
                player1.save()
                    .then(_player1 => player1 = _player1),
                player2.save()
                    .then(_player2 => player2 = _player2),
                player3.save()
                    .then(_player3 => player3 = _player3),
                player4.save()
                    .then(_player4 => player4 = _player4),
                league.save()
                    .then(_league => league = _league)
            ])
                .then(() => {
                    const id = league._id.toString()

                    return League.findOne({ _id: id })
                })
                .then(league => {
                    if (!league.players) league.players = []

                    league.players.push(player1._id)
                    league.players.push(player2._id)
                    league.players.push(player3._id)
                    league.players.push(player4._id)

                    return league.save()
                })
                .then(league => {
                    team1 = new Team({
                        name: 'los chachis',
                        players: [player1._id, player2._id]
                    })

                    team2 = new Team({
                        name: 'los chichos',
                        players: [player3._id, player4._id]
                    })

                    if (!league.teams) league.teams = []

                    league.teams.push(team1)
                    league.teams.push(team2)

                    return league.save()
                })
                .then(league => League.populate(league, { path: 'players' }))
                .then(_league => {
                    league = _league

                    done()
                })
                .catch(done)
        })

        it('should create a league and populate players', () => {
            assert(creator, 'should creator been saved')

            assert(player1, 'should player1 been created')

            assert(player2, 'should player2 been created')

            assert(player3, 'should player3 been created')

            assert(player4, 'should player4 been created')

            assert(league, 'should league been saved')

            assert(league.players, 'should league have players')

            assert.equal(league.players.length, 4, 'should league have correct players number')

            const [_player1, _player2, _player3, _player4] = league.players

            assert.equal(_player1._id.toString(), player1._id.toString(), 'should player 1 match')

            assert.equal(_player2._id.toString(), player2._id.toString(), 'should player 2 match')

            assert.equal(_player3._id.toString(), player3._id.toString(), 'should player 3 match')

            assert.equal(_player4._id.toString(), player4._id.toString(), 'should player 4 match')

            assert(league.teams, 'should league have teams')

            assert.equal(league.teams.length, 2, 'should league have one team')

            const [_team1, _team2] = league.teams

            assert.equal(_team1._id.toString, team1._id.toString, 'should team 1 match')

            assert.equal(_team2._id.toString, team2._id.toString, 'should team 2 match')

            const seekedPlayer = getPlayerById(league, player1._id.toString())

            assert.equal(seekedPlayer._id.toString(), player1._id.toString(), 'should seeked player id match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})