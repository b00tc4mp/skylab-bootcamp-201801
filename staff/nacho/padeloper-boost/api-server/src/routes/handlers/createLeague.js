const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: {id, name, city, club, category, type, date, maxplayers } } = req
    

    logic.createLeague(id, name, city, club, category, type, date, maxplayers)
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}