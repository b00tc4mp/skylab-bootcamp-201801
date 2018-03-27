const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const {
      body: {
         userFollow
      }
    } = req;

    const { params: { id } } = req
  
    logic
      .follow(
         userFollow, id
      )
      .then(objResult => {
        console.log(objResult)
        res.json(success({ objResult }));
      })
      .catch(err => {
        res.json(fail(err.message));
      });
  };
  