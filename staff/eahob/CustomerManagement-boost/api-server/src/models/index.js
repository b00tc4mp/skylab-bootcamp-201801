const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId }} = mongoose

const Customer = new Schema({
    name: String,
    surname: String,
    phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    history: [
        {
            type: ObjectId,
            ref: 'Ticket',
            unique: true
        }
    ],
    observations: String
})

const Ticket = new Schema({
    date: {
        type: Date,
        required: true
    },
    customer: {
        type: ObjectId,
        ref: 'Customer',
        required: true
    },
    services: [
        {
            service: {
                type: ObjectId,
                ref: 'Service',
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: Number,
            tax: Number
        }
    ],
    products:[
        {
            product: {
                type: ObjectId,
                ref: 'Product'
            },
            price: Number,
            quantity: Number,
            tax: Number
        }
    ],
    total: {
        withTax: Number,
        withoutTax: Number
    }
})

const Service = new Schema({
    name: {
        type: String,

        unique: true
    },
    price: Number,
    tax: Number
})

const Product = new Schema({
    name: {
        type: String,

        unique: true
    },
    price: Number,
    tax: Number
})

module.exports = {
    Customer: mongoose.model('Customer', Customer),
    Ticket: mongoose.model('Ticket', Ticket),
    Service: mongoose.model('Service', Service),
    Product: mongoose.model('Product', Product)
}