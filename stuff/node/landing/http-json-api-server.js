const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true)

    switch (_url.pathname) {
        case '/api/parsetime':
            {
                const date = new Date(_url.query.iso)

                const data = {
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }

                res.writeHead(200, { 'Content-Type': 'application/json' })

                res.end(JSON.stringify(data))
            }

            break
        case '/api/unixtime':
            {
                const date = new Date(_url.query.iso)

                const data = {
                    unixtime: date.getTime()
                }

                res.writeHead(200, { 'Content-Type': 'application/json' })

                res.end(JSON.stringify(data))
            }

            break
        default:
            res.writeHead(405)

            res.end('hello! i cannot process that request... sorry :(')
    }
})

const port = process.argv[2]

server.listen(port, () => console.log(`http json api server running on port ${port}`))

// TEST http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z
// TEST http://localhost:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z