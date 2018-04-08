const { Customer, Ticket, Service, Product } = require('../models')

// TODO end logic

module.exports = {
    findCustomersBy(name, surname, phone, email, observations) {
        const filter = {}

        if (name) filter.name = name

        if (surname) filter.surname = surname

        if (phone) filter.phone = phone

        if (email) filter.email = email

        if(observations) filter.observations = observations

        return Customer.find(filter)
    }
}