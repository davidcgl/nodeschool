var tmap = require('through2-map');

process.stdin.pipe(tmap({ wantStrings: true }, function (data) {
  return data.toUpperCase();
})).pipe(process.stdout);
