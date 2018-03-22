const logic = require('../logic')
const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const passport = require('passport')
const LocalStrategy = require('passport-local')
const jwt = require('jsonwebtoken')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

routes.route('/create')
    .post(jsonBodyParser, (req, res) => {
        const { body: { name, surname, address1, address2, telf, email, nif, username, password } } = req

        logic.setNewUser(name, surname, address1, address2, telf, email, nif, username, password)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario ${username} creado`,
                    data: user.name
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

passport.use(new LocalStrategy((username, password, done) => {
    logic.getValidate(username, password)
        .then(user => {
            if (!user) return done(undefined, false)

            done(undefined, user)
        })
        .catch(done)
}))

const secret = process.env.JWT_SECRET

routes.route('/login')
    .post([jsonBodyParser, passport.authenticate('local', { session: false })], (req, res) => {
        const { body: { username, password } } = req

        logic.getValidate(username, password)
            .then(user => {

                const token = jwt.sign({
                    id: user._id,
                    username
                }, secret, { expiresIn: 900 })

                res.json({
                    status: "OK",
                    message: `Usuario ${username} validado`,
                    data: { token, username }
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

passport.use(new JwtStrategy({
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (payload, done) => {
    const { id } = payload

    logic.getUserById(id)
        .then(user => done(undefined, user ? user : false))
        .catch(done)
}))

passport.initialize()

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

routes.route('/user')
    .post([jsonBodyParser, passport.authenticate('jwt', { session: false })], (req, res) => {

        const { body: { token } } = req
        const { id, username } = jwt.verify(token, secret)

        logic.getUserById(id)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Estos son los datos del usuario ${id}`,
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

module.exports = routes