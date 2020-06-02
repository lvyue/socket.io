const socket = io('/ws');

socket.on('connect', () =>{
    socket.emit("msg", "hello")
})


socket.on("msg",(args) => {
    console.log('msg =>',args);
})