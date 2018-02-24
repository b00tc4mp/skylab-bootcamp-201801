require('dotenv').config()

//require('./array-shuffle-polyfill-1.0.0')
const _ = require('lodash')

//const fs = require('fs')
const dataPath = process.env.DATA_PATH
//const staff = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
const staff = require(dataPath)

const express = require('express')

const app = express()

app.get('/api/staff', (req, res) => {
    const query = req.query.q || req.query.query

    if (query) {
        //const results = staff.filter(person => person.name.includes(query) || person.surname.includes(query) || person.email.includes(query))

        const results = staff.filter(person => {
            //debugger // NOTE debug console will stop here when running in debug mode!

            return person.name.includes(query) || person.surname.includes(query) || person.email.includes(query) || person['github-username'].includes(query)
        })

        res.json(results)
    } else
        res.json(staff)
})

//app.get('/api/staff/shuffle', (req, res) => res.json(staff.shuffle()))
app.get('/api/staff/shuffle', (req, res) => res.json(_.shuffle(staff)))

const port = process.env.PORT

app.listen(port, () => console.log(`staff api running on port ${port}`))
