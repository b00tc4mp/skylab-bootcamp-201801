require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')

app.set('view engine', 'pug')

//Debemos efectuar una llamada a la API, para lo cual utilizaremos axios.
//app.get para que por defecto muestre el index, luego llamamos a la api con axios a show/tasks, que es la url de nuestra api que devuelve el listado de tareas
//finalmente lo renderizamos
app.get('/', (req, res) => {
    axios.get('http://localhost:5000/api/show/tasks').then(object =>{
        res.render('index', { todos: object.data, dones: object.data })
    })

    // res.render('index', {tasks})
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req
    const id = new Date().getTime()
    const done = false
    const username = "x"

    axios.post('http://localhost:5000/api/create/task', {text, id, done, username})
    

    res.redirect('/')
})

app.get('/tasks/:id/done', (req, res) => {

    const {  params: { id } } = req

    //taskLogic.markDone(id)
    axios.put(`http://localhost:5000/api/done/task/${id}`)


    res.redirect('/')
})

app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req
    console.log(id+"shiiit")

    axios.delete('http://localhost:5000/api/delete/task/'+id)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))