var socket = io.connect();
socket.on('connect', function() {
    console.log('connected');
    socket.emit('ready', '');
});
socket.on('identify', function(message){
    console.log('your id : ' + message.access_user_id);
});
