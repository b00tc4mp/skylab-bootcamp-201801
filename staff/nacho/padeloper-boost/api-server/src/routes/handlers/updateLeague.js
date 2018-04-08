const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, city, club, category, type, date, maxplayers } } = req
    const { params: { idLeague } } = req

    logic.updateLeague(idLeague, name, city, club, category, type, date, maxplayers)
        .then((league) => res.json(success(league)))
        .catch((err) => res.json(fail(err.message)))
}