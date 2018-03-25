const { Socket } = require('net')

const client = new Socket();

client.connect(3000, '192.168.0.16', () => {   
    client.write('Vota Tony Pepperoni!!')
})

client.on('data', data => console.log(data.toString()))
