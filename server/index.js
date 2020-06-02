const server = require('http').createServer();

const notifyRoomId = 'room:notify';

const io = require('socket.io')(server, {
  path: '/socket.io',
//   serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
}).of('/ws');




io.on('connection',(socket) => {
    //
    console.log("socket -> id",socket.id);
    // 
    socket.join(notifyRoomId, (err) => {
        if (err){
            console.log(err)
        }
    });
    socket.on('msg',(args) => {
        console.log("message =>", args);
        socket.broadcast.emit("msg",` socket [${socket.id}] say "${args}"`);
    })
});




server.listen(3001);