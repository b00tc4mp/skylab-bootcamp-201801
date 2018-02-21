const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // WARN! what happens with memory in case of large files and massive connections?
    // const content = fs.readFile(file, (err, data) => {
    //     if (err) throw err

    //     res.end(data)
    // })

    fs.createReadStream(file).pipe(res)
})

const port = process.argv[2]
const file = process.argv[3]

server.listen(port, () => console.log(`file server running on port ${port}`))