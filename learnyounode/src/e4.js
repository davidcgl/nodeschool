var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
