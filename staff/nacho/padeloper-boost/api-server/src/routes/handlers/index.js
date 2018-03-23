
const createUser = require('./createUser')
const validateUser = require('./validateUser')
const listUsers = require('./listUsers')
const retrieveUser = require('./retrieveUser')
const listLeagues = require('./listLeagues')
const searchLeagues = require('./searchLeagues')
const retrieveLeague = require('./retrieveLeague')
// const listUserLeagues = require('./listUserLeagues')
const createLeague = require('./createLeague')
const addPlayerToLeague = require('./addPlayerToLeague')
const removePlayerFromLeague = require('./removePlayerFromLeague')
const generateTeams = require('./generateTeams')
const removeTeams = require('./removeTeams')
const generateMatches = require('./generateMatches')



module.exports = {

    createUser,
    validateUser,
    listUsers,
    retrieveUser,
    listLeagues,
    searchLeagues,
    retrieveLeague,
    // listUserLeagues,
    createLeague,
    addPlayerToLeague,
    removePlayerFromLeague,
    generateTeams,
    removeTeams,
    generateMatches
}