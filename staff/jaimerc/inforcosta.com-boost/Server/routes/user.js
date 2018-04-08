require('dotenv').config()
const logic = require('../logic')
const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const passport = require('passport')
const LocalStrategy = require('passport-local')
const jwt = require('jsonwebtoken')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env
const expiresIn = parseInt(expiration)

passport.use(new LocalStrategy((username, password, done) => {
    logic.getValidate(username, password)
        .then(user => {
            if (!user) return done(undefined, false)

            done(undefined, user)
        })
        .catch(done)
}))

passport.use(new JwtStrategy({
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (payload, done) => {
    const { id } = payload

    logic.getUserById(id)
        .then(user => done(undefined, user ? user : false))
        .catch(done)
}))


routes.route('/login')
    .post([jsonBodyParser, passport.authenticate('local', { session: false })], (req, res) => {
        const { user } = req

        try {

            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, secret)
//expiresIn
            //parseInt(expiration)

            res.json({
                status: "OK",
                message: `Usuario ${user.username} validado`,
                data: {
                    token,
                    username: user.username
                }
            })

        } catch (err) {
            res.json({
                status: "KO",
                message: err.message
            })
        }
    })


routes.route('/user')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
        const { user } = req

        try {

            res.json({
                status: "OK",
                message: `Estos son los datos del usuario ${user.username}`,
                data: user
            })

        } catch (err) {
            res.json({
                status: "KO",
                message: err.message
            })
        }
    })

routes.route('/create')
    .post(jsonBodyParser, (req, res) => {
        const { body: { name, surname, address1, address2, telf, email, nif, username, password } } = req

        logic.setNewUser(name, surname, address1, address2, telf, email, nif, username, password)
            .then(user => {

                const token = jwt.sign({
                    id: user._id,
                    username: user.username
                }, secret, { expiresIn })

                res.json({
                    status: "OK",
                    message: `Usuario ${user.username} creado`,
                    data: {
                        token,
                        username: user.username
                    }
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })




routes.route('/update')
    .post([jsonBodyParser, passport.authenticate('local', { session: false })], (req, res) => {
        const { body: { name, surname, address1, address2, telf, email, username, password, newPassword } } = req

        logic.setUpdateDataUser(name, surname, address1, address2, telf, email, username, password, newPassword)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario ${username} se ha modificado correctamente`,
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

routes.route('/recovery')
    .post(jsonBodyParser, (req, res) => {
        const { body: { email } } = req

        logic.setRecovery(email)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario con ${user.email} se le ha enviado un email de recuperacion de la contraseña`,
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

passport.initialize()

module.exports = routes