const express = require('express')
// const url = require('url')
const moment = require('moment')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => res.send('Hello, GET!'))

app.post('/', (req, res) => res.send('Hello, POST!'))

app.put('/', (req, res) => res.send('Hello, PUT!'))

// TEST http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z

app.get('/api/parsetime', (req, res) => {
    // const _url = url.parse(req.url, true)
    // const date = new Date(_url.query.iso)

    // const data = {
    //     hour: date.getHours(),
    //     minute: date.getMinutes(),
    //     second: date.getSeconds()
    // }

    //const date = moment(req.query.iso)
    const date = moment.utc(req.query.iso)

    const data = {
        hour: date.hours(),
        minute: date.minutes(),
        second: date.seconds()
    }

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(data))

    res.json(data)
})

const textBodyParser = bodyParser.text()

app.post('/helloworld', textBodyParser, (req, res) => {
    res.send(req.body)
})

const jsonBodyParser = bodyParser.json()

app.post('/helloworld/json', jsonBodyParser, (req, res) => {
    res.json(req.body)
})

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))