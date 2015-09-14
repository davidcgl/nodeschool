var path = require('path');
var e6 = require('./e6.js');

var dirname = process.argv[2];
var ext = process.argv[3];

e6(dirname, ext, function (err, files) {
  if (err) return console.log(err);
  files.forEach(function (file) {
    console.log(file);
  });
});

