require('dotenv').config()

const express = require('express')

const userRouter = require('./api/userRouter')

const app = express()

const Jasmine = require('jasmine')

var jasmine = new Jasmine();

jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH);

jasmine.configureDefaultReporter({
    showColors: true
});
jasmine.execute();

jasmine.onComplete(function (passed) {
    if (passed) {
        console.log('All specs have passed');

        app.use('/api', userRouter)

        const port = process.env.PORT

        app.listen(port, () => console.log(`Users API running on port ${port}`))

    } else {
        throw new Error('Specs failed...')
    }
});