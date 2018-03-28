const {success,fail} = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const {params:{idLeague} } = req
    
    logic.removeLeague(idLeague)
        .then(league => res.json(success(league)))
        .catch(err => res.json(fail(err.message)))
}