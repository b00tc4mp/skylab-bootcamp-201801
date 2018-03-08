const jwt = require('jsonwebtoken')

const secret = 'a secret phrase'

const token = jwt.sign({ message: 'Hello, World!' }, secret, { expiresIn: 3 })

console.log(token)

setTimeout(() => {
    const payload = jwt.verify(token, secret)

    console.log(new Date(payload.iat * 1000))
    console.log(new Date(payload.exp * 1000))

    console.log(`token expires in ${payload.exp - payload.iat}s`)

    console.log(payload)
}, 1000)

