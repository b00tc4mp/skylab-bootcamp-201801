const { Router } = require('express')
const bodyParser = require('body-parser')
const { listUsers, createUser, retrieveUser, validateUser, listLeagues, searchLeagues, retrieveLeague, listUserLeagues, createLeague, addPlayerToLeague, removePlayerFromLeague, generateTeams, removeTeams, generateMatches } = require('./handlers')


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

router.post('/league',jsonBodyParser,createLeague)

router.put('/league/:idLeague/add-player/:idPlayer', addPlayerToLeague)

router.put('/league/:idLeague/remove-player/:idPlayer', removePlayerFromLeague)

router.put('/league/:idLeague/generate-teams', generateTeams)

router.put('/league/:idLeague/remove-teams', removeTeams)

router.put('/league/:idLeague/generate-matches', generateMatches)


module.exports = router