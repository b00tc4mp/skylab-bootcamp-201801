let api_client;

(function(){
    const axios = require('axios')
    const baseUrl = 'http://localhost:5000/api'

    api_client = {
        
        registerUser : function(name, surname, email, username, password){
            return axios.post(`${baseUrl}/user`, {name, surname, email, username, password}).then(res => res.data.data)
        },

        loginUser : function(email,username,password){
            return axios.post(`${baseUrl}/userlogin`, {email,username,password}).then(res => res.data.data)
        },

        listLeagues : function(){
            return axios.get(`${baseUrl}/leagues`).then(res => res.data.data)
        },

        searchLeagues : function(query){
            return axios.get(`${baseUrl}/leagues/${query}`).then(res => res.data.data)
        },

        retrieveLeague : function(id){
            return axios.get(`${baseUrl}/league/${id}`).then(res => res.data.data)
        },
        
        registerLeague : function(name,city,club,type,category,maxplayers){
            return axios.post(`${baseUrl}/league`).then(res => res.data.data)
        }

    }
})()

export default api_client