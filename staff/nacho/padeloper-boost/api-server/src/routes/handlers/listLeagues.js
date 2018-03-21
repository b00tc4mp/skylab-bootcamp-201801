const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    logic.listLeagues()
        .then(leagues => res.json(success(leagues)))
        .catch(err => res.json(fail(err.message)))
}