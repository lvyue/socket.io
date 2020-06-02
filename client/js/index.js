const socket = io('/ws',{
    transports:["polling","websocket"],
    transportOptions:{

    },
    forceJSONP: true,
    forceNew: true,
    timeout: 10000,
});

socket.on('connect', () =>{
    socket.emit("msg", "hello")
})


socket.on("msg",(args) => {
    console.log('msg =>',args);
})