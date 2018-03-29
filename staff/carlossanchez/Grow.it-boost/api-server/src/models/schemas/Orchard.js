const { Schema, Schema: { ObjectId } } = require('mongoose')
const Plantation = require('./Plantation')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    m2: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    admitsCollaborators: Boolean,
    admitsConsulting: Boolean,
    description: String,
    plantations: [Plantation],
    users: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                required: true
            },
            role: {
                type: String,
                enum: ['admin', 'collaborator'],
                required: true
            }
        }
    ]
})