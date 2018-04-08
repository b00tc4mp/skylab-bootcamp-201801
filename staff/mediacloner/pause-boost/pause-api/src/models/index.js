const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String,
    city: String,
    country: String,
    kudos: Number,
    createAt: {type: Date, default: Date.now},
    about: String,
    followers: Array,
    following: Array,
    timelineTitle: String
})

const Post = new mongoose.Schema({
    title: String,
    shortDescription: String,
    fullDescription: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    kudos: {type: Number, default:0},
    counterVisits: {type: Number, default:0},
    idPostTemplate: String,
    tag: String,
    createAt:{type: Date, default: Date.now},
    URLpath: String , 
    time: String,
    comments: [{

        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: String,
    }]

})




module.exports = {
    User: mongoose.model('User', User),
    Post: mongoose.model('Post', Post)
}