const {success,fail} = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { body: {idTeamWinner,gamesTeamWinner,idTeamLoser,gamesTeamLoser} } = req
    const { params: {idLeague,idMatch} } = req

    logic.editMatchResult(idLeague,idMatch,idTeamWinner,gamesTeamWinner,idTeamLoser,gamesTeamLoser)

        .then(league => res.json(success(league)))

        .catch(err => res.json(fail(err.message)))

}