const http = require('http')

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf-8')

    res.on('data', console.log)

    res.on('error', console.error)

    res.on('end', () => console.log('ending...'))
})