const http = require('http')
const bufferList = require('bl')

const url = process.argv[2]

console.log(url)

// TRY with:
// - http://www.ibmbigdatahub.com/tag/1008
// - http://api.themoviedb.org/3/movie/popular?api_key=5aee70d47502de15fcdde658cbdcb3c7&language=en-US&page=1

http.get(url, res => {
    res.setEncoding('utf-8')

    res.pipe(bufferList((err, data) => {
        console.log('res.pipe -> on data')

        if (err) throw err

        console.log(data.toString()) // data is a buffer, so it is necessary to stringify it
    }))

    res.on('error', console.error)
})

