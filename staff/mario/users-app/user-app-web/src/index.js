/**
 * Pug Api 
 * @version 1.0.0
 */

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const taskLogic = require('./taskLogic')

const app = express()

const axios = require('axios')

app.set('view engine', 'pug')

// ALL TASKS REQUEST

app.get('/', (req, res) => {
    
    axios.get('http://localhost:5000/api/tasks/all').then(obj => {
        tasks = obj.data.data
        res.render('index',tasks)
    })
})

// CREATING A TASK

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req

    axios.post('http://localhost:5000/api/tasks', { text } ).then( res.redirect('/') )
})

// MOVING TASK TO DONE

app.get('/tasks/:id/done', (req, res) => {
    const {  params: { id } } = req

    axios.put('http://localhost:5000/api/tasks/' + id).then(res.redirect('/'))
})

// REMOVING A TASK

app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req

    axios.delete('http://localhost:5000/api/tasks/' + id).then(res.redirect('/'))
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))