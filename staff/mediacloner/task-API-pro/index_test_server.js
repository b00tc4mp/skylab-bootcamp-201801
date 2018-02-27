const express = require('express')
// const url = require('url')
//const moment = require('moment')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => res.send('Hello, GET!'))

app.post('/', (req, res) => res.send('Hello, POST!'))

app.put('/', (req, res) => res.send('Hello, PUT!'))

// TEST http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z


const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))