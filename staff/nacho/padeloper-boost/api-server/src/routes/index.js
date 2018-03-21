const { Router } = require('express')
const bodyParser = require('body-parser')
const { listUsers, createUser, retrieveUser, validateUser, listLeagues, searchLeagues, retrieveLeague,listUserLeagues,createLeague } = require('./handlers')


const router = Router()
const jsonBodyParser = bodyParser.json()

/**********************************+***********************************************/
                    /*              USERS           */
/*******************************************************************************+**/
router.get('/users', listUsers)

router.get('/user/:id', retrieveUser)

router.post('/user', jsonBodyParser, createUser)

router.post('/userlogin', jsonBodyParser, validateUser)


/**********************************+***********************************************/
                    /*             LEAGUES            */
/*******************************************************************************+**/

router.get('/leagues',listLeagues)

router.get('/league/:id', retrieveLeague)

router.get('/leagues/:query',searchLeagues)

// TODO router.put('/leagues/:leagueId/add-player/:playerId', addPlayerToLeague)

// router.get('/userleagues',listUserLeagues)
router.post('/league',jsonBodyParser,createLeague)


module.exports = router