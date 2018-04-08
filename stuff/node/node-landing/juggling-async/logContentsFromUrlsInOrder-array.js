
const http = require('http')
const concatStream = require('concat-stream')

function logContentsFromUrlsInOrder(urls) { // COOL! rest operator
    if(urls.length)
        http.get((urls = urls.slice()).shift(), res => {
            res.setEncoding('utf-8')

            res.pipe(concatStream(data => {
                console.log(data)

                logContentsFromUrlsInOrder(urls) // COOL! spread operator
            }))

            res.on('error', console.error)
        })
}

module.exports = logContentsFromUrlsInOrder