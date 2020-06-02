const socket = io('/ws',{
    transports:["polling","websocket"],
    transportOptions:{
        
    }
});

socket.on('connect', () =>{
    socket.emit("msg", "hello")
})


socket.on("msg",(args) => {
    console.log('msg =>',args);
})