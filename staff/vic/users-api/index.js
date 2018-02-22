require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {
    okMsg,
    errMsg
} = require('./response')
const app = express()

const users = []

app.get('/api/users', (req, res) => res.json(okMsg('Users listing succeeded.', users.map(({
    username
}) => ({
    username
})))))

//const jsonBodyParser = bodyParser.json()
app.use(bodyParser.urlencoded())

app.post('/api/users', /*jsonBodyParser ,*/ (req, res) => {
    const {
        username,
        password
    } = req.body

    if (!username || !password) return res.json(errMsg('User registration failed.', 'Invalid username and/or password.'))

    const userAlreadyExists = users.some(user => user.username === username)

    if (userAlreadyExists) return res.json(errMsg('User registration failed.', 'Username already exists.'))

    users.push({
        username,
        password
    })

    res.json(okMsg('User registration succeeded.'))
})

//================
//Testing Middleware
function checkUserInputed(req, res, next) {
    const method = req.method
    const userInputed = req.query.q || req.query.query

    if (!userInputed) return res.json(errMsg(`User ${method} failed.`, 'You need input user name.'))

    if (method === 'PUT') {
        if (!req.body.username) return res.json(errMsg('User update failed.', 'Invalid username'))
    }

    const userAlreadyExists = users.some(_user => _user.username === userInputed)

    if (!userAlreadyExists) return res.json(errMsg(`User ${method} failed.`, 'Username didn\'t exists.'))

    next()
}

app.put('/api/users', checkUserInputed ,(req, res) => {
    const userInputed = req.query.q || req.query.query
    const {username} = req.body

    users.forEach(_user => {
        if (_user.username === userInputed) _user.username = username

        return _user
    })

    res.json(okMsg('User updated.'))
})

app.delete('/api/users', checkUserInputed, (req, res) => {
    const userInputed = req.query.q || req.query.query

    users.map((_user, i) => {
        if (_user.username === userInputed) users.splice(i, 1)

        return _user
    })

    res.json(okMsg('User deleted.'))
})

// ========== ⚡️ ==========
const port = process.env.PORT
app.listen(port, () => console.log(`Users API running on port ${port}`))