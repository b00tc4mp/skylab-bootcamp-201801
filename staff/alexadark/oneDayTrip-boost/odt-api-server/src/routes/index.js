const {Router} = require('express');
const bodyParser = require('body-parser');
const router = Router();
const createUser = require('./handlers/createUser');
const jsonBodyParser = bodyParser.json();

router.post('/user', jsonBodyParser, createUser);
// router.put('/user/:id',jsonBodyParser, editUser);
// router.delete('/user/:id', jsonBodyParser, removeUser);
// router.get('/user/:id', retrieve);
//
// router.post('/trip', jsonBodyParser, createTrip);
// router.put('/trip/:id',jsonBodyParser, editTrip);
// router.delete('/trip/:id', jsonBodyParser, cancelTrip);