
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 8080;


app.get('*', (req,res) => {
  res.send("SERVER")
});


io.on('connection', socket => {
  socket.emit('init',{
    message:'Hello world!',
    lat: 1,
    lng: 2
  });
});


server.listen(port, () => {
  console.log(`'Running on port ${port}...`);
});
