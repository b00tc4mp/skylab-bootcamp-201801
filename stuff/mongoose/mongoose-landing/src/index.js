const mongoose = require('mongoose')
const uuid = require('uuid/v4')

mongoose.connect('mongodb://localhost/bootcamp')

const User = mongoose.model('User', { id: String, name: String, surname: String, email: String, username: String, password: String })

// const user = new User({
//     id: uuid(),
//     name: 'n',
//     surname: 's',
//     email: 'e',
//     username: 'u',
//     password: 'p'
// })

// user.save()
//     .then(console.log)
//     .catch(console.error)

// User.create({
    // id: uuid(),
//     name: 'n',
//     surname: 's',
//     email: 'e',
//     username: 'u2',
//     password: 'p'
// })

// User.find({ username: 'u' }, { _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1 })
//     .then(console.log)
//     .catch(console.error)


User.find({ username: 'u' })
    .then(([user]) => {
        return user.remove()
    })
    .then(console.log)
    .catch(console.error)




