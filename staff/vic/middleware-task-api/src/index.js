require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const {taskAppRouter} = require('./routes/taskAppRoutes')

const app = express()

const formBodyParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')

app.use(taskAppRouter)

//=================  🔥  =================\\
const port = process.env.PORT
app.listen(port, () => console.log(`Task App running on port ${port}`))