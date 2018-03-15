const mongoose = require('mongoose')
const dbUri = 'mongodb://localhost/customer-management-models-test'
const assert = require('assert')
const { Customer, Ticket, Service, Product } = require('../src/models')


describe('models', () => {
    before(done => {
        mongoose.connect(dbUri)

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach(async () => {
        const db = mongoose.connection

        await Promise.all([
            Customer.remove(),
            Ticket.remove(),
            Service.remove(),
            Product.remove()
        ])
    })

    describe('create customer', () => {
        let customer

        beforeEach(async () => {
            customer = new Customer({
                name: 'name',
                surname: 'surname',
                phone: 'phone',
                email: 'email',
                observations: 'observations'
            })

            await customer.save()
                .then(_customer => customer = _customer)
        })

        it('should create customer', () => {
            assert(customer, 'should customer been saved')

            assert.equal(customer.name, 'name', 'should customer name match')
            assert.equal(customer.surname, 'surname', 'should customer surname match')
        })
    })

    describe('create customer with same phone', () => {
        let customer, customer2, error

        beforeEach(done => {
            customer = new Customer({
                name: 'name',
                surname: 'surname',
                phone: 'phone',
                email: 'email',
                observations: 'observations'
            })

            customer2 = new Customer({
                name: 'name',
                surname: 'surname',
                phone: 'phone',
                email: 'email',
                observations: 'observations'
            })

            Promise.all([
                customer.save()
                    .then(_customer => customer = _customer),
                customer2.save()
                    .then(_customer2 => customer2 = _customer2)
            ])
                .then(() => done())
                .catch(err => {
                    error = err

                    done()
                })
        })

        it('should create customer with same phone fail', () => {
            assert(error, 'should create customer have thrown error')
        })
    })

    describe('create ticket with services and products for customer', () => {
        let customer, ticket, service, service2, product, product2

        beforeEach(async () => {
            customer = new Customer({
                name: 'name',
                surname: 'surname',
                phone: 'phone',
                email: 'email',
                observations: 'observations'
            })

            service = new Service({
                name: 'service',
                price: 1,
                tax: 21
            })

            service2 = new Service({
                name: 'service2',
                price: 2,
                tax: 21
            })

            product = new Product({
                name: 'product',
                price: 1,
                tax: 21
            })

            product2 = new Product({
                name: 'product2',
                price: 1,
                tax: 21
            })

            await Promise.all([
                customer.save()
                    .then(_customer => customer = _customer),
                service.save()
                    .then(_service => service = _service),
                service2.save()
                    .then(_service2 => service2 = _service2),
                product.save()
                    .then(_product => product = _product),
                product2.save()
                    .then(_product2 => product2 = _product2)
            ])
                .then(() => {
                    ticket = new Ticket({
                        date: new Date,
                        customer: customer._id,
                        services: [
                            {
                                service: service._id,
                                price: service.price
                            },
                            {
                                service: service2._id,
                                price: service2.price
                            }
                        ],
                        products: [
                            {
                                product: product._id
                            },
                            {
                                product: product2._id
                            }
                        ]
                    })

                    return ticket.save()
                })
                .then(_ticket => ticket = _ticket)
        })

        it('should create ticket with services and products for customer', () => {
            assert(ticket, 'should ticket been saved')

            assert(ticket.customer, 'should ticket have a customer')

            assert.equal(ticket.customer.toString(), customer._id.toString(), 'should customer match')

            assert(ticket.services, 'should ticket have services')

            assert.equal(ticket.services.length, 2, 'should ticket have 2 services')

            const [serviceObj, serviceObj2] = ticket.services

            assert.equal(serviceObj.service.toString(), service._id.toString(), 'should service match')

            assert.equal(serviceObj2.service.toString(), service2._id.toString(), 'should service match')

            const [productObj, productObj2] = ticket.products

            assert.equal(productObj.product.toString(), product._id.toString(), 'should product match')

            assert.equal(productObj2.product.toString(), product2._id.toString(), 'should product match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})