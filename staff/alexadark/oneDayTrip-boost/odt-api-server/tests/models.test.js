const mongoose = require('mongoose')
const assert = require('assert')
const should = require('should')
const moment = require('moment')
const { User, Trip, Comment } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/one-day-trip-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach(() => Promise.all([
        User.remove(),
        Trip.remove()
    ]))

    describe('join passengers to trip', () => {
        let creator, trip, passenger1, passenger2

        before(done => {
            creator = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-creator',
                password: 'password'
            })

            passenger1 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-passenger-1',
                password: 'password'
            })

            passenger2 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-passenger-2',
                password: 'password'
            })

            trip = new Trip({
                from: 'Barcelona',
                to: 'Palamos',
                meetingPoint: 'Roc Boronat, 35',
                price: 20,
                departureDate: new Date,
                returnDate: new Date,
                seats: 3,
                distance: 60,
                tripTime: 1.75,
                description: 'description',
                creator: creator._id,
                passengers: []
            })

            Promise.all([
                creator.save()
                    .then(_creator => creator = _creator),
                passenger1.save()
                    .then(_passenger1 => passenger1 = _passenger1),
                passenger2.save()
                    .then(_passenger2 => passenger2 = _passenger2),
                trip.save()
                    .then(_trip => trip = _trip),
            ])
                .then(() => {
                    return Trip.findOne({ _id: trip._id })
                })
                .then(trip => {
                    if (!trip.passengers) trip.passengers = []

                    trip.passengers.push(passenger1._id)
                    trip.passengers.push(passenger2._id)

                    return trip.save()
                })
                .then(_trip => trip = _trip)
                .then(() => done())
                .catch(done)
        })

        it('should join passengers to trip', () => {
            assert(creator, 'should creator been saved')

            assert(trip, 'should trip been saved')

            assert(passenger1, 'should passenger 1 been saved')

            assert(passenger2, 'should passenger 2 been saved')

            assert(trip.passengers, 'should trip have passengers')

            assert.equal(trip.passengers.length, 2, 'should trip have both passengers 1 and 2')

            const [_id1, _id2] = trip.passengers

            assert.equal(_id1.toString(), passenger1._id.toString(), 'should passenger 1 match')

            assert.equal(_id2.toString(), passenger2._id.toString(), 'should passenger 2 match')
        })
    })

    describe('find trips between dates', () => {
        let trips

        before(() => {
            const insertions = []

            creator = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-creator',
                password: 'password'
            })

            insertions.push(creator.save()
                .then(_creator => creator = _creator))

            for (let i = 0; i < 10; i++)
                insertions.push(new Trip({
                    from: 'from',
                    to: 'to',
                    meetingPoint: 'meetingPoint',
                    price: 20,
                    departureDate: newDate(2018, 1, 1 + i, i, i),
                    returnDate: new Date,
                    seats: 3,
                    distance: 60,
                    tripTime: 1.75,
                    description: 'description',
                    creator: creator._id,
                    passengers: []
                }).save())

            return Promise.all(insertions)
                .then(() => {
                    return Trip.find({
                        departureDate: {
                            $gte: newDate(2018, 1, 1, 0, 0).toISOString(),
                            $lte: newDate(2018, 1, 5, 23, 59).toISOString()
                        }
                    })
                })
                .then(_trips => trips = _trips)
        })

        it('should find trips between dates', () => {
            assert(trips, 'should trips be found')

            assert.equal(trips.length, 5, 'should trips found be 5')
        })
    })

    function newDate(year, month, day, hours, minutes) {
        return new Date(year, month - 1, day, hours, minutes)
    }

    describe('comment a user', () => {
        let user, commentator, comment, dateNow = new Date()

        before(() => {
            user = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            commentator = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-commentator',
                password: 'password'
            })

            passenger2 = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-passenger-2',
                password: 'password'
            })

            return Promise.all([
                user.save()
                    .then(_user => user = _user),
                commentator.save()
                    .then(_user => commentator = _user)
            ])
                .then(() => {
                    comment = new Comment({
                        user: commentator._id,
                        date: dateNow,
                        comment: 'comment',
                        rating: 5
                    })

                    user.comments = []

                    user.comments.push(comment)

                    return user.save()
                })
                .then(_user => user = _user)
        })

        it('should comment a user', () => {
            assert(user, 'should creator been saved')

            assert(commentator, 'should commentator been saved')

            should(user.comments.length).be.exactly(1)

            const [_comment] = user.comments

            should(_comment._id.toString()).be.exactly(comment._id.toString())

            should(_comment.user.toString()).be.exactly(commentator._id.toString())

            should(_comment.date.getYear()).be.exactly(dateNow.getYear())
            should(_comment.date.getMonth()).be.exactly(dateNow.getMonth())
            should(_comment.date.getDate()).be.exactly(dateNow.getDate())
            should(_comment.date.getHours()).be.exactly(dateNow.getHours())
            should(_comment.date.getMinutes()).be.exactly(dateNow.getMinutes())

            should(_comment.comment).be.exactly('comment')

            should(_comment.rating).be.exactly(5)
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})