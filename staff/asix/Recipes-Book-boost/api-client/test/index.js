require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should listUser', done => {
        api.listUser()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })

    it('should listRecipe', done => {
        api.listRecipe()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })
})