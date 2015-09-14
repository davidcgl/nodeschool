var net = require('net');
var strftime = require('strftime');
var os = require('os');

var port = parseInt(process.argv[2]);
var server = net.createServer(function (socket) {
  socket.write(strftime('%Y-%m-%d %H:%M' + os.EOL));
  socket.end();
});
server.listen(port);
