const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listRecipe()
        .then(recipes => res.json(success(recipes)))
        .catch(err => res.json(fail(err)))
}