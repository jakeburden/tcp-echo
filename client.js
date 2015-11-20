const net = require('net')
const client = net.connect(9090)

process.stdin.on('data', client.write)
client.on('data', process.stdout.write)
