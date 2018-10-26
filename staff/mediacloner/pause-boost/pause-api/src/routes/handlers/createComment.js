const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const {
      body: {
         comment, userId
      }
    } = req;

    const { params: { id } } = req
  
    logic
      .createComment(
         comment, userId, id
      )
      .then(objResult => {
        console.log(objResult)
        res.json(success({ objResult }));
      })
      .catch(err => {
        res.json(fail(err.message));
      });
  };
  