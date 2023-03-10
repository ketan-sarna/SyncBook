const express = require('express');
const {Server} = require('socket.io');

const app = express();
const http  = require('http');
const server = http.createServer(app);
const io = new Server(server)
io.on('connection' , (socket) => {
    console.log('socket connected',socket.id);
});

const PORT = process.env.PORT || 5500;
server.listen(PORT , () => console.log('listening on port ${PORT} '));