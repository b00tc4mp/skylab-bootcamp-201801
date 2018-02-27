const express = require('express')

const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()

const users = []

app.get('/api/users', (req, res) => res.json(ok('Users listing succeeded.', users.map(({ username }) => ({ username })))))

const jsonBodyParser = bodyParser.json()

app.post('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User registration failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) return res.json(ko('User registration failed.', 'Username already exists.'))

    users.push({ username, password })

    res.json(ok('User registration succeeded.'))
})

app.put('/api/users', jsonBodyParser, (req, res) => {
    const { username, oldPassword, newPassword } = req.body

    const exists = users.some(user => user.username === username)

    if (!exists) return res.json('User not found')

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && oldPassword !== users[i].password) {
            return res.json(ko('Sorry, password NOT UPDATED, old password does not match with the current password.'))
        }

    }

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && oldPassword === users[i].password) {
            users[i].password = newPassword
            return res.json(ok('Password updated'))
        }

    }
})

app.delete('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    const exists = users.some(user => user.username === username)

    if (!exists) return res.json('User not found')

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            _.pull(users, users[i])
            return res.json(ok('User removed.'))
        }

    }

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password !== users[i].password) {
            return res.json(ko('Wrong password, user not deleted.'))
        }
        
    }

})

function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

const port = process.argv[2]

app.listen(port, () => console.log(`Users API running on port ${port}`))