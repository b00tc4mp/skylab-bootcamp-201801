const mongoose = require('mongoose')
const dbUri = 'mongodb://localhost/customer-management-logic-test'
const assert = require('assert')
const { Customer, Ticket, Service, Product } = require('../src/models')
const logic = require('../src/logic')

describe('logic', () => {
    before(done => {
        mongoose.connect(dbUri)

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    describe('find all customers', () => {
        const MAX_COUNT = 10
        let customers

        beforeEach(async () => {
            let count = MAX_COUNT

            const customerCreations = []

            while (count--) {
                const customer = new Customer({
                    name: 'name',
                    surname: 'surname',
                    phone: `phone-${count}`,
                    email: `email-${count}`,
                    observations: 'observations'
                })

                customerCreations.push(customer.save())
            }

            await Promise.all(customerCreations)

            customers = await logic.findCustomersBy()
        })

        it('should find all customers', () => {
            assert(customers, 'should customers been found')

            assert.equal(customers.length, MAX_COUNT, 'should customers length match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})