//npm install dotenv... configuraciones de entorno
require('dotenv').config()

const express = require('express')

const userRouter = require('./api/taskRouter')

const app = express()

app.use('/api', userRouter)

//gracias a dotenv
const port = process.env.PORT

app.listen(port, () => console.log(`Task API running on port ${port}`))