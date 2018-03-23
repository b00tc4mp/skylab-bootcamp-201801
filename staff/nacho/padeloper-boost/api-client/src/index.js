let api_client;

(function(){
    const axios = require('axios')
    const baseUrl = 'http://localhost:5000/api'

    api_client = {
        
        registerUser : function(name, surname, email, username, password){
            return axios.post(`${baseUrl}/user`, {name, surname, email, username, password}).then(res => res.data)
        },

        loginUser : function(email,username,password){
            return axios.post(`${baseUrl}/userlogin`, {email,username,password}).then(res => res.data.data)
        },

        retrieveUser : function(idUser){
            return axios.get(`${baseUrl}/user/${idUser}`)
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
        
        registerLeague : function(name,city,club,type,category,date,maxplayers){
            return axios.post(`${baseUrl}/league`, {name,city,club,type,category,date,maxplayers}).then(res => res.data.data)
        },

        removePlayerFromLeague : function(idLeague,idPlayer){
            return axios.put(`${baseUrl}/league/${idLeague}/remove-player/${idPlayer}`).then(res => res.data.data)
        },

        addPlayerToLeague : function(idLeague,idPlayer){
            return axios.put(`${baseUrl}/league/${idLeague}/add-player/${idPlayer}`).then(res => res.data.data)
        },

        generateTeams : function(idLeague){
            return axios.put(`${baseUrl}/league/${idLeague}/generate-teams`).then(res => res.data).catch(err => console.log(err.message))
        },

        removeTeams : function(idLeague){
            return axios.put(`${baseUrl}/league/${idLeague}/remove-teams`).then(res => res.data)
        },

        generateMatches : function(idLeague){
            return axios.put(`${baseUrl}/league/${idLeague}/generate-matches`).then(res => res.data)
        }

    }
})()

export default api_client