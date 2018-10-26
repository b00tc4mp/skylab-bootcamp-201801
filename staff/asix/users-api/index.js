require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonBodyParser = bodyParser.json()

let users = []

app.use(jsonBodyParser)

app.get('/api/user', (req,res) => {
   res.json(ok('Users listing succeeded.', users ))
})

app.post('/api/user', (req,res) => {
   const {username, password} = req.body

   if(!username || !password) return res.json(ko('User registration failed.', 'Invalid username and/or password.'))

   const alreadyexist = users.some(user => user.username === username)

   if(alreadyexist) return res.json(ko('User registration failed.','Username already exists.'))

   users.push({username,password})
   res.json(ok('User registration succeeded.'))
})

app.put('/api/user', (req,res) => {
   const {username, password} = req.body

   if(!username || !password) return res.json(ko('User identify failed.', 'Invalid username and/or password.'))

   const exists = users.some(user => user.username === username)

   if(!exists) return res.json(ko('User idetify failed.', 'Invalid username and/or password.'))

   const user = users.findIndex(user => user.username === username)
   users[user].password = password
   res.json(ok('User modify succeeded'))

})

app.delete('/api/user', (req,res) => {
   const {username} = req.body

   if(!username) return res.json(ko('User identify failed.', 'Invalid username and/or password.'))

   const confirmUser = users.some(user => user.username === username)

   if(!confirmUser) return res.json(ko('User identify failed.', 'Invalid username and/or password.'))

   if(confirmUser){
       const user = users.findIndex(user => user.username === username)
       users.splice(user,1)
       res.json(ok('User delete succeeded'))
   }
})

function ok(message,data){
   const res = {status: 'OK', message}

   if(data) res.data = data

   return res
}

function ko(message,error){
   const res = {status:'KO', message}

   if(error) res.error = error

   return res
}

const port = process.env.PORT
app.listen(port, () => console.log(`User API running on port ${port}`))

