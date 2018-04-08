require('dotenv').config()

const Jasmine = require('jasmine')

var jasmine = new Jasmine();

jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH);

jasmine.configureDefaultReporter({
    showColors: true
});

jasmine.execute();

jasmine.onComplete(function (passed) {

    if (passed) {

        const express = require('express')

        const userRouter = require('./api/userRouter')

        const app = express()

        app.use('/api', userRouter)

        const port = process.env.PORT

        app.listen(port, () => console.log(`Users API running on port ${port}`))

    } else {

        throw new Error('Specs failed...')
    }
});