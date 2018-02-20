const http = require('http')
const concatStream = require('concat-stream')

const url = process.argv[2]

console.log(url)

// TRY with:
// - http://www.ibmbigdatahub.com/tag/1008
// - http://api.themoviedb.org/3/movie/popular?api_key=5aee70d47502de15fcdde658cbdcb3c7&language=en-US&page=1

http.get(url, res => {
    res.setEncoding('utf-8')

    res.pipe(concatStream(data => {
        console.log('res.pipe -> on data')

        console.log(data) // data is already a string
    }))

    res.on('error', console.error)
})

