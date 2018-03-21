const { User, League, Team, Match, Result, Stats } = require('../models')
const validate = require('./validate')
const uuid = require('uuid/v4')
const mongoose = require('mongoose')

module.exports = {

    listUsers(){
        return User.find({},{_id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1})
    },


    retrieveUser(id){
        return Promise.resolve()
        .then(() => {
            validate({id})
            
            return User.findOne({_id: id},{_id: 1, name: 1, username: 1, stats:1})
        })
        .then((user) => {
            if(!user) throw Error ('user does not exist')

            return user
        })
        
    },


    createUser(name, surname, email, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error(` ${email}  already exists`)

                return User.create({ name, surname, email, username, password })
                    // .then(() => id)
            })
    },


    validateUser( email,username,password ){
        return Promise.resolve()
            .then(() => {
                validate({email,username,password})
            })
            .then(() => {
                
               return User.findOne({ email, username, password })
            })
            .then(user => {
                if(!user) throw Error(`mail, user or password are wrong`)

                return user
            })     
    },


    listLeagues(){
        return League.find({},{_id:1,creator:1,name:1,city:1,club:1,type:1,category:1,maxplayers:1,created:1,players:1})
    },


    searchLeagues(query){
        return League.find({$or:[{city: new RegExp(query, 'i')},{club:new RegExp(query,'i')}]},{ _id: 0})
                  
    },


    retrieveLeague(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return League.findOne({ _id: id })
                    .populate({ path: 'players' })
            })
            .then(league => {
                if (!league) throw Error(`this league with id ${id} does not exist`)

                return league
            })
    },


    // listUserLeagues(userId){
    //     User.find({_id:userId})
    //     return League.find({},{_id:1,creator:1,name:1,city:1,club:1,type:1,category:1,maxplayers:1,created:1})
    // },


    createLeague(name,city,club,type,category,maxplayers){
        return Promise.resolve()
            .then(() =>{
                validate({name,city,club})

                return League.findOne({name})
            })
            .then(league => {
                if(league) throw Error (`${name} already exists`)
                const creator = mongoose.mongo.ObjectId("5aa7dc25f36d28207a6eeb53")

                return League.create({creator,name,city,club,type,category,maxplayers})
                    .then(() => name)
            })
    },

    addPlayerToLeague(leagueId, playerId) {
        // TODO
    }

}