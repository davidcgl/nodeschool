var http = require('http');
var url = require('url');

function parseTime (date) {
  return JSON.stringify({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  });
}

function unixTime (date) {
  return JSON.stringify({
    unixtime: date.getTime()
  });
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  if (parsedUrl.pathname === '/api/parsetime') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(parseTime(date));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(unixTime(date));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

var port = parseInt(process.argv[2]);
server.listen(port, function () {
  console.log('Listening on port ' + port);
});
