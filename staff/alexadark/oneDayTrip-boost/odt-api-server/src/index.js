require('dotenv').config();
const express = require('express');
// const routes = require('./routes');

const mongoose = require('mongoose');
const {success, fail} = require('./api-utils');
const bodyParser = require('body-parser');
const {User, Trip, Comment} = require('./models/index');
const _ = require('lodash')

const moment = require('moment');
const ObjectId = require('mongodb').ObjectID;


const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL


const cors = require('cors');


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

    User.findOne({username})
            .then(user => {
                return User.create({name, surname, email, picture, username, password})
            })
            .then(username => res.json(success({username})))
            .catch(err => res.json(fail(err.message)))

});

/**
 * Login
 */

 router.post('/login', jsonBodyParser, (req,res) =>{
     const {body: {username, password}} = req
     User.findOne({ username })
       .then(user => {
         if (!user) throw Error("user does not exists");
         if (user.password !== password) throw Error("wrong password");
         return user._id
       })
    
       .then(id => {
         res.json(success({id}));
       })
       .catch(err => {
         res.json(fail(err.message));
       });
 
})

//TODO exclude password from result
/**
 * Find user ID by username
 */
router.get('/user/:username', (req,res) =>{
    const {username} = req.params

     User.findOne({username})
        .then(user => {
            if (!user) throw Error('user does not exists')
            return user._id
        })

        .then(userId => {
            res.json(success(userId))
        })
        .catch(err => res.json(fail(err.message)))
})

/**
 * Find user by ID
 */
router.get('/userid/:id', (req,res)=>{
    const {id} = req.params

    User.findOne({"_id": ObjectId(id)})
        .then(user => {
            return user
        })
        .then(user => {
            res.json(success(user))
        })
})

/**
 * Find Trip by ID
 */

router.get('/trip/:id', (req,res)=>{
    const {id} = req.params

    Trip.findOne({"_id": ObjectId(id)})
        .then(trip => {
            return trip
        })
        .then(trip => {
            res.json(success(trip))
        })
})

/**
 * Delete user
 */
router.delete('/user/:id', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {id}} = req;

    User.findOne({"_id": ObjectId(id)})
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

    User.findOne({"_id": ObjectId(id)})
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
    const departureDate = moment(`${date} ${departureTime}`).toDate();
    const returnDate = moment(`${date} ${returnTime}`).toDate();

    Trip.create({
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
        })
        .then(trip => {
            res.json(success({trip}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * List trips by destination and date
 */
router.get('/available-trips/:destination/:arrival/:departure', (req,res) =>{
    const {params: {destination, arrival,departure}} = req
    Trip.find({
        from:destination,
        departureDate:{
            $gte: moment(arrival).toDate(),
            $lte: moment(departure).toDate()
        }
    })
        .then(trips =>{
            if(!trips) throw Error('there is no trips with these criterias')
            return trips
        })
        .then((trips) => {
            res.json(success(trips))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
})

/**
 * list user published trips
 */
router.get('/trips/:creatorId', (req, res) => {
    const {params: {creatorId}} = req

    Trip.find({creator:ObjectId(creatorId)})
        .then(trips => {
            res.json(success(trips))
        })


});

/**
 * List user booked trips
 */

router.get('/booked-trips/:userId', (req,res) => {
    const {params: {userId}} = req

    Trip.find({passengers: {"_id": ObjectId(userId)}})
        .then(trips => {
            res.json(success(trips))
        })

})

/**
 * cancel trip
 */
router.delete('/trip/:creatorId/:tripId', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {creatorId, tripId}} = req;

    User.findOne({"_id": ObjectId(creatorId)})
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

    User.findOne({"_id": ObjectId(creatorId)})
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


    Trip.findOne({"_id": ObjectId(tripId)})
        .then(trip => {
            if (!trip.passengers) trip.passengers = [];

            if ((trip.passengers).includes({"_id": ObjectId(passengerId)})) throw Error('this passenger has already' +
                ' joined this trip')
            if(trip.seats - trip.passengers.length < 1) throw Error ('This trip is fully booked')
            trip.passengers.push({"_id": ObjectId(passengerId)})
            return trip.save()
        })
        .then(() => {
            res.json(success('Trip booked'))
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

   Trip.findOne({"_id": ObjectId(tripId)})
        .then(trip => {
            const passengersArray = trip.passengers
            const index = passengersArray.indexOf(passenger)
            // if(index <0) throw Error('This passenger is not on this trip')
            passengersArray.splice(index, 1)
            console.log(trip)

            return trip.save()
        })
        .then((trip) => {
            res.json(success(trip))
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