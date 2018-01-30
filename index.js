var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('cht', function(msg) {
    io.emit('cht', msg);
  });
});


http.listen(3000, function(){
  console.log('Working noowwww 3000 porttt');
});