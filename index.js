const express = require('express');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./routes');
const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log("Socket: We have a new connection!");
  socket.on("Socket: Disconnected");
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

