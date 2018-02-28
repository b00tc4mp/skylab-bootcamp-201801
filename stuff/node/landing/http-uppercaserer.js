const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
    if (req.method === 'POST')
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

const port = process.argv[2]

server.listen(port, () => console.log(`http uppercaserer running on port ${port}`))

// $  curl -X POST --upload-file ./helloworld.txt http://localhost:8000