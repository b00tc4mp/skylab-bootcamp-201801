const mongoose = require('mongoose')
const assert = require('assert')
const { User, Trip, Comment } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/one-day-trip-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

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

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})