require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')


const tasks = []
// Por defecto muestra el index en el directorio raiz
app.get('/',(req,res) => {
   res.render("index",{tasks})
})

app.post('/tasks', formBodyParser, (req,res) => {
    const text = req.body.text
    const task = {
        id: new Date().getTime(),
        text:text,
        done: false
    }

    tasks.push(task)
    res.redirect('/')
})


app.get('/tasks/:id/done',(req,res) => {
    const id = req.params.id
    const task = tasks.find(element => element.id == id)
    if(task) task.done = true
    res.redirect('/')
})


app.get('/tasks/:id/delete', (req,res) => {
    const id = req.params.id
    const index = tasks.findIndex(element => element.id == id)
    if(index > -1) tasks.splice(index,1)
    res.redirect('/')
})

const port = process.env.PORT
app.listen(port, () => console.log(`server  running at port ${port}`))





/*

/ -> landing / login

/login (username / password) 
    OK -> /welcome
    KO -> /login-error

/welcome

/login-error

*/
