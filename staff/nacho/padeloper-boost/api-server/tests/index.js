const mongoose = require('mongoose')
const { Schema: { ObjectId } } = mongoose
const assert = require('assert')
const { User, League, Team, Match, Result, Stats } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/padeloper-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
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
        let creator, league, player1, player2, team

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

            Promise.all([
                creator.save()
                    .then(_creator => creator = _creator),
                player1.save()
                    .then(_player1 => player1 = _player1),
                player2.save()
                    .then(_player2 => player2 = _player2),
                league.save()
                    .then(_league => league = _league)
            ])
                .then(() => {
                    const id = league._id.toString()

                    return League.findOne({ _id: id })
                })
                .then(league => {
                    if(!league.players) league.players = []

                    league.players.push(player1._id)
                    league.players.push(player2._id)

                    return league.save()
                })
                .then(league => {
                    team = new Team({
                        name: 'los chachis',
                        players: [player1._id, player2._id]
                    })

                    if (!league.teams) league.teams = []

                    league.teams.push(team)

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

            assert(league, 'should league been saved')

            assert(league.players, 'should league have players')

            assert.equal(league.players.length, 2, 'should league have 2 players')

            const [player1_id, player2_id] = league.players

            assert.equal(player1_id.toString(), player1._id.toString(), 'should player 1 match')

            assert.equal(player2_id.toString(), player2._id.toString(), 'should player 2 match')

            assert(league.teams, 'should league have teams')

            assert.equal(league.teams.length, 1, 'should league have one team')

            const [_team] = league.teams

            assert.equal(_team._id.toString, team._id.toString, 'should team match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})