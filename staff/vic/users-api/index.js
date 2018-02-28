require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {okMsg,errMsg} = require('./response')
const app = express()

const users = []

app.use(bodyParser.json())

app.get('/api/users', (req, res) => res.send(okMsg('Users listing succeeded.', users.map(({username}) => ({username})))))

app.post('/api/users', (req, res) => {
    const {
        username,
        password
    } = req.body

    if (!username || !password) return res.send(errMsg('User registration failed.', 'Invalid username and/or password.'))

    const userAlreadyExists = users.some(user => user.username === username)

    if (userAlreadyExists) return res.send(errMsg('User registration failed.', 'Username already exists.'))

    users.push({ username,password })

    res.send(okMsg('User registration succeeded.'))
})

function checkUserInputed(req, res, next) {
    const method = req.method
    const userInputed = req.query.q || req.query.query

    if (!userInputed) return res.json(errMsg(`User ${method} failed.`, 'You need input user name.'))

    req.query.user = userInputed //adding in query, user

    const userAlreadyExists = users.some(_user => _user.username === userInputed)

    if (!userAlreadyExists) return res.json(errMsg(`User ${method} failed.`, 'Username didn\'t exists.'))

    next()
}

app.put('/api/users', checkUserInputed ,(req, res) => {

    if (!req.body.username) return res.send(errMsg('User update failed.', 'Invalid username'))

    const userInputed = req.query.user
    const {username} = req.body

    let i = 0;
    while (i < users.length) {

        if (users[i].username === userInputed) {
            users[i].username = username
            break;
        }

        i ++
    }

    res.send(okMsg('User updated.'))
})

app.delete('/api/users', checkUserInputed, (req, res) => {
    const userInputed = req.query.user

    let i = 0;
    while (i < users.length) {

        if (users[i].username === userInputed) {
            users.splice(i, 1)
            break;
        }

        i ++
    }

    res.send(okMsg('User deleted.'))
})

// ========== ⚡️ ==========
const port = process.env.PORT
app.listen(port, () => console.log(`Users API running on port ${port}`))