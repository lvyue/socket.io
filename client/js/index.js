const socket = io('http://127.0.0.1:3001/ws');

socket.on('connect', () =>{
    socket.emit("msg", "hello")
})


socket.on("msg",(args) => {
    console.log('msg =>',args);
})