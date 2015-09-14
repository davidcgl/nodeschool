var trumpet = require('trumpet');
var tmap = require('through2-map');

var tr = trumpet();

// Transform all selected elements' innerHTML to uppercase.
tr.selectAll('.loud', function (elem) {
  var stream = elem.createStream();
  stream.pipe(tmap({ wantStrings: true }, function (chunk) {
    return chunk.toUpperCase();
  })).pipe(stream);
});

process.stdin.pipe(tr).pipe(process.stdout);
