require('dotenv').config()
const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should register user', done => {
        api.registerUser('n', 's', 'e', 'u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })

    it('should list users', done => {
        api.registerUser('n', 's', 'e', 'u', 'p')
        .then(() => api.registerUser('n', 's', 'e', 'u1', 'p'))
            .then(() => api.list())
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })

    it('should register league', done => {
        api.registerLeague('c','c','c','c','t','d','m')
        .then(res => {
            assert.equal(res.status, 'OK', 'results should be OK')

            assert(res.data && res.data.id, 'should return data id')

            done()
        })
        .catch(done)
    })
})