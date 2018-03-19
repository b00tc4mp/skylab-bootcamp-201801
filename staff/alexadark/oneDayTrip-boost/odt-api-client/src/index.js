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


    getUsernameId(username){
        return this.call('get',`user/${username}`)
    },

    getUserFromId(id){
        return this.call('get',`userid/${id}`)
    },

    getTripFromId(id){
        return this.call('get',`trip/${id}`)
    },

    deleteUser(id, password){
       return this.call('delete',`user/${id}`, {password})
    },


    updateUser(id, name, surname, email, picture, password, newPassword){
        return this.call('put',`user/${id}`, {name, surname, email, picture, password, newPassword})
    },



    createTrip(creatorId,from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description){
        return this.call('post',`trip/${creatorId}`,{from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description})
    },



    listUserPublishedTrips(creatorId){
        return this.call('get',`trip/${creatorId}`)
    },

    listTrips(destination){
        return this.call('get',`available-trips/${destination}`)
    },



    cancelTrip(creatorId, password){
        return this.call('delete',`trip/${creatorId}`, {password})
    },



    updateTrip(creatorId, tripId, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password){
        return this.call('put',`trip/${creatorId}/${tripId}`, {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password})
    },



    joinTrip(tripId, passengerId){
        return this.call('put',`trip/join/${tripId}/${passengerId}`)
    },



    unjoinTrip(tripId, passengerId){
        return this.call('delete',`trip/unjoin${tripId}/${passengerId}`)
    },



    comment(commentedUserId, userId, comment, rating){
        return this.call('put',`trip/${commentedUserId}/${userId}`,{comment, rating})
    },


};

module.exports = api;