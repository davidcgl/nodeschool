var http = require('http');
var tmap = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method != 'POST') {
    res.writeHead(405, { 'content-type': 'text/plain' });
    res.end('Server accepts only POST requests');
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  req.pipe(tmap({ wantStrings: true }, function (chunk) {
      return chunk.toUpperCase();
    })).pipe(res);
});

var port = parseInt(process.argv[2]);
server.listen(port, function () {
  console.log('Listening on port ' + port);
})
