const {success,fail} = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { params: { idLeague } } = req

    logic.removeTeams(idLeague)
    .then(leagues => res.json(success(leagues)))
    .catch(err => res.json(fail(err.message)))
}