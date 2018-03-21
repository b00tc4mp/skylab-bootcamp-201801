require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.end('<h1>Welcome to my first Heroku app</h1>')
})

const { PORT, HELLO_ENV } = process.env

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

console.log(`HELLO_ENV: ${HELLO_ENV}`)