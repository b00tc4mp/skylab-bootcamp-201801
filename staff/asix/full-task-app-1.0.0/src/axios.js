const axios = require('axios')
const baseUrl = 'http://localhost:5000/api/tasks'

const axiosCall = {

    list(res){
        axios.get(`${baseUrl}`)
        .then(obj => res.render('form', {tasks: obj.data}))
    },

    create(res, text){
        axios.post(`${baseUrl}`, { text: text })
        res.redirect('/')
    },

    edit(res, id){
        axios.put(`${baseUrl}/${id}`)
        res.redirect('/')
    },

    delete(res, id){
        axios.delete(`${baseUrl}/${id}`)
        res.redirect('/')
    }
}

module.exports = axiosCall