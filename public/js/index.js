var socket = io();

socket.on('connect', function(){
    console.log('Receiving data from the server');

    socket.emit('createMessage',{
        from: 'boshka',
        text: 'this is the super duper Boshka :)'
    });
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});


socket.on('newMessage', function(message){
    console.log('newMessage', message);
});
