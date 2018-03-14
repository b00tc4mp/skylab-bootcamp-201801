const mongoose = require('mongoose')
const { User, Event, Session, Ticket } = require('./models')

mongoose.connect('mongodb://localhost/demi')
    .then(() => Event.remove())
    .then(main)
    .catch(console.error)

function main() {

const user = new User({
    name: 'Carlos',
    surname: 'de Miguel',
    email: 'mail@mail.com',
    role: 'ADMIN',
    username: 'demi',
    password: '123',
})

user.save()

const event = new Event({
    title: 'Alegria',
    subtitle: 'X',
    company: 'Cirque du Soleil',
    image: 'http://image.com',
})

const session = new Session({
    date: new Date,
    location: 'Roc Boronat, 35 (BCN)'
})

const ticket = new Ticket({
    code: 'QWASERAS',
    status: false,
    validated: undefined
})

session.tickets = [ticket]
event.sessions = [session]

event.save()

user.events = [event._id]

user.save()

}