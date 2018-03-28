const { Router } = require('express')
const bodyParser = require('body-parser')
const { listUsers, createUser, retrieveUser, validateUser, listLeagues, searchLeagues, retrieveLeague, listUserLeagues, createLeague, removeLeague, updateLeague, addPlayerToLeague, removePlayerFromLeague, generateTeams, removeTeams, generateMatches, removeMatches, editMatchResult } = require('./handlers')


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

router.get('/leagues/userleagues/:idUser', listUserLeagues)

router.get('/league/:id', retrieveLeague)

router.get('/leagues/:query', searchLeagues)

router.post('/league',jsonBodyParser, createLeague)

router.delete('/league/:idLeague/remove-league', removeLeague)

router.put('/league/:idLeague/update-league', jsonBodyParser,updateLeague)

router.put('/league/:idLeague/add-player/:idPlayer', addPlayerToLeague)

router.put('/league/:idLeague/remove-player/:idPlayer', removePlayerFromLeague)

router.put('/league/:idLeague/generate-teams', generateTeams)

router.put('/league/:idLeague/remove-teams', removeTeams)

router.put('/league/:idLeague/generate-matches', generateMatches)

router.put('/league/:idLeague/remove-matches', removeMatches)

router.put('/league/:idLeague/match-result/:idMatch', jsonBodyParser, editMatchResult)


module.exports = router