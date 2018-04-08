const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

const Tenant = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    documentId: {
        type: String,
        required: true,
        unique: true
    },

    active: Boolean
})

const Lease = new Schema({
    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },
    tenants: [
        {
            type: ObjectId,
            ref: 'Tenant',
            required: true
        }
    ],
    password: {
        type: String,
        required: true
    },
    active: Boolean
})

const Payment = new Schema({
    concept: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['rent', 'diposit', 'service', 'other', 'booking fee']   
    },
    lease: {
        type: ObjectId,
        ref: 'Lease'
    },
    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'paid']
    }
    // TODO other fields
})

const Property = new Schema({
    owner: {
        type: ObjectId,
        ref: 'Owner',
        required: true
    }
    // TODO other fields
})

const Owner = new Schema({
    documentId: {
        type: String,
        required: true,
        unique: true
    }
    // TODO other fields
})

const Deduction = new Schema({
    concept: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const Transfer = new Schema({
    concept: {
        type: String,
        required: true
    },
    deductions: [Deduction]
})

module.exports = {
    Tenant: mongoose.model('Tenant', Tenant),
    Lease: mongoose.model('Lease', Lease),
    Property: mongoose.model('Property', Property),
    Owner: mongoose.model('Owner', Owner),
    Payment: mongoose.model('Payment', Payment),
    Transfer: mongoose.model('Transfer', Transfer),
    Deduction: mongoose.model('Deduction', Deduction)
}