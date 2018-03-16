const axios = require('axios');

const api = {
    baseUrl : 'http://localhost:5000/api',

    call(method, path, body){
        return axios[method](`${this.baseUrl}/${path}`, body)
            .then(res => res.data.data)
    },

    registerUser(name, surname, email, picture, username, password) {
        return this.call('post', 'user', { name, surname, email, picture, username, password })
    },

    createTrip(creatorId,from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description){
        return this.call('post',`trip/${creatorId}`,{from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description})
    },


};

module.exports = api;