const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
  //  console.log('un usuario se conecto')

  // socket.on('chat', (msg) => {
   // console.log('mensaje: ' +msg)
 // })

 socket.on('chat', (msg) => {
    io.emit('chat', msg)
 })
})


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, () => {
    console.log('corriendo en puerto 3000')
})