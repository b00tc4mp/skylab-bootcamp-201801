const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { params: { id } } = req
    
    logic.retrieveLeague(id)
        .then(league => res.json(success(league)))
        .catch(err => res.json(fail(err.message)))
}