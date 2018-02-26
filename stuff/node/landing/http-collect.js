const http = require('http')

const url = process.argv[2]

console.log(url)

// TRY with:
// - http://www.ibmbigdatahub.com/tag/1008
// - http://api.themoviedb.org/3/movie/popular?api_key=5aee70d47502de15fcdde658cbdcb3c7&language=en-US&page=1

http.get(url, res => {
    res.setEncoding('utf-8')

    let count = 0
    let rawData = ''

    res.on('data', chunk => {
        count++
        rawData += chunk
    })

    res.on('end', () => {
        console.log(count, rawData.length)
        //console.log(rawData)
    })

    res.on('error', console.error)
})

