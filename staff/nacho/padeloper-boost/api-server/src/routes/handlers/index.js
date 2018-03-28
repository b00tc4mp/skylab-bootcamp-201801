
const createUser = require('./createUser')
const validateUser = require('./validateUser')
const listUsers = require('./listUsers')
const retrieveUser = require('./retrieveUser')
const listLeagues = require('./listLeagues')
const searchLeagues = require('./searchLeagues')
const retrieveLeague = require('./retrieveLeague')
const listUserLeagues = require('./listUserLeagues')
const createLeague = require('./createLeague')
const removeLeague = require('./removeLeague')
const updateLeague = require('./updateLeague')
const addPlayerToLeague = require('./addPlayerToLeague')
const removePlayerFromLeague = require('./removePlayerFromLeague')
const generateTeams = require('./generateTeams')
const removeTeams = require('./removeTeams')
const editTeams = require('./editTeams')
const generateMatches = require('./generateMatches')
const removeMatches = require ('./removeMatches')
const editMatchResult = require ('./editMatchResult')


module.exports = {

    createUser,
    validateUser,
    listUsers,
    retrieveUser,
    listLeagues,
    searchLeagues,
    retrieveLeague,
    listUserLeagues,
    createLeague,
    removeLeague,
    updateLeague,
    addPlayerToLeague,
    removePlayerFromLeague,
    generateTeams,
    removeTeams,
    editTeams,
    generateMatches,
    removeMatches,
    editMatchResult
}