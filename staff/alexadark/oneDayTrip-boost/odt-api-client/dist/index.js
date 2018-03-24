'use strict';

var axios = require('axios');

var api = {
    // baseUrl: 'https://fast-headland-72756.herokuapp.com/api',
    baseUrl: 'http://localhost:5000/api',

    call: function call(method, path, body) {
        return axios[method](this.baseUrl + '/' + path, body)
        // .then(res => res.data)
        .then(function (_ref) {
            var data = _ref.data;
            return data;
        });
    },
    registerUser: function registerUser(name, surname, email, picture, username, password) {
        return this.call('post', 'user', { name: name, surname: surname, email: email, picture: picture, username: username, password: password });
    },
    login: function login(username, password) {
        return this.call('post', 'login', { username: username, password: password });
    },
    getUsernameId: function getUsernameId(username) {
        return this.call('get', 'user/' + username);
    },
    getUserFromId: function getUserFromId(id) {
        return this.call('get', 'userid/' + id);
    },
    getTripFromId: function getTripFromId(id) {
        return this.call('get', 'trip/' + id);
    },
    deleteUser: function deleteUser(id, password) {
        return this.call('delete', 'user/' + id, { password: password });
    },
    updateUser: function updateUser(id, name, surname, email, picture, password, newPassword) {
        return this.call('put', 'user/' + id, { name: name, surname: surname, email: email, picture: picture, password: password, newPassword: newPassword });
    },
    createTrip: function createTrip(creatorId, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description) {
        return this.call('post', 'trip/' + creatorId, { from: from, to: to, date: date, meetingPoint: meetingPoint, departureTime: departureTime, returnTime: returnTime, tripTime: tripTime, price: price, distance: distance, seats: seats, description: description });
    },
    listUserPublishedTrips: function listUserPublishedTrips(creatorId) {
        return this.call('get', 'trips/' + creatorId);
    },
    listUserBookedTrips: function listUserBookedTrips(userId) {
        return this.call('get', 'booked-trips/' + userId);
    },
    listTrips: function listTrips(destination, arrival, departure) {
        return this.call('get', 'available-trips/' + destination + '/' + arrival + '/' + departure);
    },
    cancelTrip: function cancelTrip(creatorId, password) {
        return this.call('delete', 'trip/' + creatorId, { password: password });
    },
    updateTrip: function updateTrip(creatorId, tripId, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password) {
        return this.call('put', 'trip/' + creatorId + '/' + tripId, { from: from, to: to, date: date, meetingPoint: meetingPoint, departureTime: departureTime, returnTime: returnTime, tripTime: tripTime, price: price, distance: distance, seats: seats, description: description, password: password });
    },
    joinTrip: function joinTrip(tripId, passengerId) {
        return this.call('put', 'trip/join/' + tripId + '/' + passengerId);
    },
    unjoinTrip: function unjoinTrip(tripId, passengerId) {
        return this.call('delete', 'trip/unjoin/' + tripId + '/' + passengerId);
    },
    comment: function comment(commentedUserId, userId, _comment, rating) {
        return this.call('put', 'user/comment/' + commentedUserId + '/' + userId, { comment: _comment, rating: rating });
    },
    geoLocalize: function geoLocalize(lat, lng) {
        return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyCRDIKkOEGj3jXB9LEuiC8_yYiu535htcI').then(function (res) {
            return res.results.address_components;
        });
    }
};

module.exports = api;
