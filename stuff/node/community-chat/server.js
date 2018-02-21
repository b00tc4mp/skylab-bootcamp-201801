const net = require('net')

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(`${socket.remoteAddress}:${socket.remotePort} -> ${data.toString().substring(0, 100)}`)

        socket.write('ACK')
    })

    socket.on('error', console.error)
})

const port = process.argv[2]

server.listen(port, () => console.log(`chat server running on port ${port}`))