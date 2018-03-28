const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { idLeague} } = req
    const { body: { teams } } = req

    logic.editTeams(idLeague, teams)
        .then((league) => res.json(success(league)))
        .catch((err) => res.json(fail(err.message)))

}