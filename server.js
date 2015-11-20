const net = require('net')

const server = net.createServer(connection => {
  connection.on('data', connection.write)
})

server.listen(9090)
