require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const socket = require('socket.io');
const app = express();
app.use(cors());
app.use(express.json());
// app.use(router)
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const io = socket(server);
io.on('connection', (socket) => {
  console.log("Socket: We have a new connection!");
  socket.on('join',(data,callBack)=>{
    console.log(data)
    callBack({message: "abhinay is awesome"});;
  })
  socket.on("disconnect",()=>{
    console.log('lost');
  });
});



