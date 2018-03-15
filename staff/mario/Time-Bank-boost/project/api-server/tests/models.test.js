const mongoose = require('mongoose')
const assert = require('assert')
const { User, Service, Contract } = require('../src/models')


describe('models', () => {
    before(() => {
        return mongoose.connect('mongodb://localhost/rent-manager-models-test')
    })

    describe('create a contract', () => {
        let contract, server, client, service

        before(() => {
            server = new User({
                name: 'name-server',
                username: 'username-server'
            })

            client = new User({
                name: 'name-client',
                username: 'username-client'
            })

            service = new Service({
                title: 'repair bicycle'
            })

            contract = new Contract({
                service: service._id,
                server: server._id,
                client: client._id
            })
            
            return Promise.all([
                server.save().then(_server => server = _server),
                client.save().then(_client => client = _client),
                service.save().then(_service => service = _service),
                contract.save().then(_contract => contract = _contract)
            ])
                .then(() => {
                    const id = contract._id.toString()

                    return Contract.findOne({ _id: id }).then(_contract => contract = _contract)
                })
        })

        it('should create a lease', () => {
            assert(server, 'should server be created')

            assert(client, 'should client be created')

            assert(service, 'should service be created')

            assert(contract, 'should contract be created')

            assert.equal(contract.service.toString(), service._id.toString(), 'should service match')

            assert.equal(contract.server.toString(), server._id.toString(), 'should server match')

            assert.equal(contract.client.toString(), client._id.toString(), 'should client match')
        })
    })

    after(done => {
        return mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})