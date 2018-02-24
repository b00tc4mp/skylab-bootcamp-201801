
const http = require('http')
const concatStream = require('concat-stream')


//const numberOfUrls = process.argv.length - 2
// let n = 0

// function passCode() {
//     const url = process.argv[n + 2]
    
//     http.get(url, res => {
//         res.setEncoding('utf-8')

//         res.pipe(concatStream(data => {
//             console.log('res.pipe -> res on data')
//             console.log(data)

//             if (n < numberOfUrls - 1) {
//                 n++

//                 passCode()                
//             }
//         }))
//     })
// }

//passCode()

// $ node . http://google.co.uk http://google.es http://google.it

function logContentsFromUrlsInOrder(...urls) { // COOL! rest operator
    if(urls.length)
        http.get(urls.shift(), res => {
            res.setEncoding('utf-8')

            res.pipe(concatStream(data => {
                console.log(data)

                logContentsFromUrlsInOrder(...urls) // COOL! spread operator
            }))

            res.on('error', console.error)
        })
}

module.exports = logContentsFromUrlsInOrder