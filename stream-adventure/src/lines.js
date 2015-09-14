var os = require('os');
var tmap = require('through2-map');
var split = require('split');

// Convert even-numbered lines to uppercase, odd-numbered lines to lowercase.
// Line number starts from 1.
var lineNum = 1;
process.stdin
  .pipe(split())
  .pipe(tmap({ wantStrings: true }, function (data) {
    var line = lineNum++ % 2 ? data.toLowerCase() : data.toUpperCase();
    return line += os.EOL;
  }))
  .pipe(process.stdout);
