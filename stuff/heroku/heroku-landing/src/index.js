require('dotenv').config()

const express = require('express')

const app = express()

const { PORT, HELLO_ENV } = process.env

app.get('/', (req, res) => {
    res.json({ salute: HELLO_ENV })
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))

console.log(`HELLO_ENV: ${HELLO_ENV}`)