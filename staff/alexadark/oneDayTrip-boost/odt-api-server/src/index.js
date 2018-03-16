require('dotenv').config();
const express = require('express');
// const routes = require('./routes');

const mongoose = require('mongoose');
const {success, fail} = require('./api-utils');
const bodyParser = require('body-parser');
const {User, Trip, Comment} = require('./models');
const _ = require('lodash')
const logic = require('./logic')

const moment = require('moment');
const ObjectId = require('mongodb').ObjectID;


const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL


const cors = require('cors');

const mongo = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DB,

};


mongoose.connect(`mongodb://${mongoUrl}`);

const app = express();
const router = express.Router();
app.use(cors());
app.use('/api', router);

const jsonBodyParser = bodyParser.json();

/**
 * Create user
 */
router.post('/user', jsonBodyParser, (req, res) => {

    const {body: {name, surname, email, picture, username, password}} = req;

    logic.registerUser(name, surname, email, picture, username, password)
        .then(username => res.json(success({username})))
        .catch(err => res.json(fail(err.message)))
});

/**
 * Delete user
 */
router.delete('/user/:id', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {id}} = req;

    Promise.resolve()
        .then(() => User.findOne({"_id": ObjectId(id)}))
        .then(user => {
            if (!user) throw Error('user does not exists');
            if (user.password !== password) throw Error('wrong password');

            return User.deleteOne({"_id": ObjectId(id)})

        })
        .then(() => {
            res.json(success(`Your account ${id} has been deleted`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});

/**
 * Update user
 */
router.put('/user/:id', jsonBodyParser, (req, res) => {
    const {body: {name, surname, email, picture, password, newPassword}} = req;
    const {params: {id}} = req;

    Promise.resolve()
        .then((() => User.findOne({"_id": ObjectId(id)})))
        .then(user => {
            if (!user) throw Error('user does not exists');
            if (user.password !== password) throw Error('wrong password');

            return User.updateOne({"_id": ObjectId(id)}, {name, surname, email, picture, password: newPassword})

        })
        .then(() => {
            res.json(success(`${id} successfully updated`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});


/**
 * Create Trip
 */
router.post('/trip/:creatorId', jsonBodyParser, (req, res) => {
    const {body: {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description}} = req;
    const {params: {creatorId}} = req;
    const departureDate = moment(`${date} ${departureTime}`);
    const returnDate = moment(`${date} ${returnTime}`);

    Promise.resolve()
        .then(() => Trip.create({
            from,
            to,
            meetingPoint,
            departureDate,
            returnDate,
            price,
            distance,
            tripTime,
            seats,
            description,
            creator: {"_id": ObjectId(creatorId)}
        }))
        .then(trip => {
            res.json(success({trip}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * list user published trips
 */
router.get('/trips/:creatorId', (req, res) => {
    const {params: {creatorId}} = req;

    Promise.resolve()
        .then(() => Trip.find({creator:ObjectId(creatorId)})
        .then(trips => {
            res.json(success({trips}))
        }))


});

/**
 * cancel trip
 */
router.delete('/trip/:creatorId/:tripId', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {creatorId, tripId}} = req;

    Promise.resolve()
        .then(() => User.findOne({"_id": ObjectId(creatorId)}))
        .then(user => {
            if (user.password !== password) throw Error('wrong password');

            return Trip.deleteOne({"_id": ObjectId(tripId)})

        })
        .then(() => {
            res.json(success(`The trip ${tripId} has been deleted`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});

/**
 * Update trip
 */
router.put('/trip/:creatorId/:tripId', jsonBodyParser, (req, res) => {
    const {body: {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password}} = req;
    const {params: {creatorId, tripId}} = req;

    Promise.resolve()
        .then(() => User.findOne({"_id": ObjectId(creatorId)}))
        .then(user => {
            if (user.password !== password) throw Error('wrong password');

            return Trip.updateOne({"_id": ObjectId(tripId)}, {
                from,
                to,
                date,
                meetingPoint,
                departureTime,
                returnTime,
                tripTime,
                price,
                distance,
                seats,
                description
            })

        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * Join a trip : will happen on click book button, getting the id from the trip
 */

router.put('/trip/join/:tripId/:passengerId', (req, res) => {
    const {params: {tripId, passengerId}} = req;


    Promise.resolve()
        .then(() => Trip.findOne({"_id": ObjectId(tripId)}))
        .then(trip => {
            if (!trip.passengers) trip.passengers = [];
            //TODO error if a passenger is already on a trip
            if ((trip.passengers).includes({"_id": ObjectId(passengerId)})) throw Error('this passenger has already' +
                ' joined this trip')
            trip.passengers.push({"_id": ObjectId(passengerId)})
            return trip.save()
        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * Unjoin trip
 */
router.delete('/trip/unjoin/:tripId/:passengerId', (req, res) => {
    const {params: {tripId, passengerId}} = req;
    const passenger = {"_id": ObjectId(passengerId)}

    Promise.resolve()
        .then(() => Trip.findOne({"_id": ObjectId(tripId)}))
        .then(trip => {
            const passengersArray = trip.passengers
            const index = passengersArray.indexOf(passenger)
            passengersArray.splice(index, 1)

            return trip.save()
        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});


/**
 * user let comment to other user
 */

router.put('/user/comment/:commentedUserId/:userId', jsonBodyParser, (req, res) => {
    const {params: {commentedUserId, userId}} = req;
    const {body: {comment, rating}} = req;
    const commentedUser = {"_id": ObjectId(commentedUserId)};
    const user = {"_id": ObjectId(userId)};
    const commentObj = {
        user,
        date: moment(),
        comment,
        rating
    }
    console.log(commentObj)
    Promise.resolve()
        //TODO user cannot comment several times
        .then((user) => User.findOne(commentedUser))
        .then((user) => {
            if (!user.comments) user.comments = [];
            user.comments.push(commentObj)
            return user.save()
        })
        .then(() => {
            res.json(success(commentObj))
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});




app.listen(port, () => console.log(`ODT api running on port ${port}`));
console.log(`MONGO_URL: ${mongoUrl}`)