require('dotenv').config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const jsonBodyParser = bodyParser.json()

const users = []// this will be our database

//LETS START creating a user
app.post('/api/create',jsonBodyParser, (req,res) => {

    const user = {
        id: req.body.id,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }

    const id = req.body.id
    const ifExist = users.some(userElement => userElement.id === id)

    if(ifExist){
        console.log("This user id has already been created")
    }else{
        res.json(user)        
    }

    users.push(user)

})



//LETS READ THE USERS LIST

app.get('/api/read',jsonBodyParser,(req,res) => {
    if(users.length === 0){
        res.send("There are no users to show")
    }else{
        res.send(users)
    }
})


// NOW WE WILL UPDATE USERNAME AND PASSWORD

app.put('/api/update/:id', jsonBodyParser, (req,res) => {

    const id = req.params.id
    const username = req.body.username
    
    const index = users.findIndex(elm => elm.id===id)
    
    if(index<0){
        res.send(`Username with id ${id} does not exist`)
        
    }else{
        users[index].username = username
        res.send(users[index])
    }

})



// ITS TIME TO DELETE
app.delete('/api/delete/:id',jsonBodyParser, (req, res) => {
    const id = req.params.id
    const index = users.findIndex(elm => elm.id===id)
    
    console.log(`array length: ${users.length} and index returns ${index}`)
    if(index<0){
        res.send(`There are no users with id: ${id}`)
    }
    else{
        users.splice(index,1)
        res.send(users)
    }
})



const port = process.env.PORT
app.listen(port,() => console.log(`server running at port ${port}`))