const {Router} = require('express');
const bodyParser = require('body-parser');
const router = Router();
const createUser = require('./handlers/createUser');
const jsonBodyParser = bodyParser.json();

router.post('/user', jsonBodyParser, registerUser);

router.post('/login', jsonBodyParser, login)


router.get('/user/:username', getUsernameId)

router.get('/userid/:id', getUserFromId)

router.get('/trip/:id', getTripFromId)

router.delete('/user/:id', jsonBodyParser, deleteUser)


router.put('/user/:id',jsonBodyParser, updateUser)

router.post('/trip/:creatorId', jsonBodyParser, createTrip)

router.get('/available-trips/:destination/:arrival/:departure', listTrips)

router.get('/trips/:creatorId', listUserPublishedTrips)

router.get('/booked-trips/:userId', listUserBookedTrips)

router.delete('/trip/:creatorId/:tripId', jsonBodyParser, cancelTrip)


router.put('/trip/:creatorId/:tripId',jsonBodyParser, updateTrip)


router.put('/trip/join/:tripId/:passengerId', joinTrip)

router.delete('/trip/unjoin/:tripId/:passengerId', unjoinTrip)


router.put('/user/comment/:commentedUserId/:userId',jsonBodyParser, comment);
