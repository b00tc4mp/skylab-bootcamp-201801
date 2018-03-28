const axios = require('axios');

const api = {
    baseUrl : 'SET-BASE-URL',

    call(method, path, body){
        return axios[method](`${this.baseUrl}/${path}`, body)
            // .then(res => res.data)
            .then(({ data }) => data)
    },


    registerUser(name, surname, email, picture, username, password) {
        return this.call('post', 'user', { name, surname, email, picture, username, password })
    },
    
    login(username, password){
        return this.call('post', 'login', {username, password})
        
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
        return this.call('get',`trips/${creatorId}`)
    },

    listUserBookedTrips(userId){
        return this.call('get',`booked-trips/${userId}`)
    },

    listTrips(destination,arrival,departure){
        return this.call('get',`available-trips/${destination}/${arrival}/${departure}`)
    },



    cancelTrip(creatorId, tripId, password){
        return this.call('delete',`trip/${creatorId}/${tripId}`, { data: { password: password }})
    },



    updateTrip(creatorId, tripId, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password){
        return this.call('put',`trip/${creatorId}/${tripId}`, {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password})
    },



    joinTrip(tripId, passengerId){
        return this.call('put',`trip/join/${tripId}/${passengerId}`)
    },



    unjoinTrip(tripId, passengerId){
        return this.call('delete',`trip/unjoin/${tripId}/${passengerId}`)

    },



    comment(commentedUserId, userId, commentText, rating){
        return this.call('post',`user/comment/${commentedUserId}/${userId}`,{commentText, rating})
    },
    geoLocalize(lat,lng){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCRDIKkOEGj3jXB9LEuiC8_yYiu535htcI`)
            .then(res => res.data)
    }


};

module.exports = api;