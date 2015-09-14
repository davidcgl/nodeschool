var http = require('http');
var fs = require('fs');

var file = process.argv[3];
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  // Readable.pipe() automatically calls res.end() when the Readable 'end'
  // event is fired. This means that the source stream's data is completely
  // consumed, and the destination stream will no longer accept any data.
  fs.createReadStream(file).pipe(res);
});

var port = parseInt(process.argv[2]);
server.listen(port, function () {
  console.log('Listening on port ' + port);
})
