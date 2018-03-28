'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var api_client = void 0;

(function () {
    var axios = require('axios');
    //const baseUrl = 'http://localhost:5000/api'
    var baseUrl = 'https://whispering-hollows-28610.herokuapp.com/api';

    api_client = {

        registerUser: function registerUser(name, surname, email, username, password) {
            return axios.post(baseUrl + '/user', { name: name, surname: surname, email: email, username: username, password: password }).then(function (res) {
                return res.data;
            });
        },

        loginUser: function loginUser(email, username, password) {
            return axios.post(baseUrl + '/userlogin', { email: email, username: username, password: password }).then(function (res) {
                return res.data.data;
            });
        },

        retrieveUser: function retrieveUser(idUser) {
            return axios.get(baseUrl + '/user/' + idUser);
        },

        listLeagues: function listLeagues() {
            return axios.get(baseUrl + '/leagues').then(function (res) {
                return res.data.data;
            });
        },

        searchLeagues: function searchLeagues(query) {
            return axios.get(baseUrl + '/leagues/' + query).then(function (res) {
                return res.data.data;
            });
        },

        retrieveLeague: function retrieveLeague(id) {
            return axios.get(baseUrl + '/league/' + id).then(function (res) {
                return res.data.data;
            });
        },

        registerLeague: function registerLeague(name, city, club, type, category, date, maxplayers) {
            return axios.post(baseUrl + '/league', { name: name, city: city, club: club, type: type, category: category, date: date, maxplayers: maxplayers }).then(function (res) {
                return res.data.data;
            });
        },

        removePlayerFromLeague: function removePlayerFromLeague(idLeague, idPlayer) {
            return axios.put(baseUrl + '/league/' + idLeague + '/remove-player/' + idPlayer).then(function (res) {
                return res.data.data;
            });
        },

        addPlayerToLeague: function addPlayerToLeague(idLeague, idPlayer) {
            return axios.put(baseUrl + '/league/' + idLeague + '/add-player/' + idPlayer).then(function (res) {
                return res.data.data;
            });
        },

        generateTeams: function generateTeams(idLeague) {
            return axios.put(baseUrl + '/league/' + idLeague + '/generate-teams').then(function (res) {
                return res.data;
            }).catch(function (err) {
                return console.log(err.message);
            });
        },

        removeTeams: function removeTeams(idLeague) {
            return axios.put(baseUrl + '/league/' + idLeague + '/remove-teams').then(function (res) {
                return res.data;
            });
        },

        generateMatches: function generateMatches(idLeague) {
            return axios.put(baseUrl + '/league/' + idLeague + '/generate-matches').then(function (res) {
                return res.data;
            });
        }

    };
})();

exports.default = api_client;
