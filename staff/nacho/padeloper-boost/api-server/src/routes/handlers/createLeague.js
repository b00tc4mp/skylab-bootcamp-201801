const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: {creator, name, city, club, type, category, date, maxplayers } } = req

    logic.createLeague(creator, name, city, club, type, category , date, maxplayers)
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}