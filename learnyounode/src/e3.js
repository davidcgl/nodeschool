var fs = require('fs');
var filename = process.argv[2];
var data = fs.readFileSync(filename);
console.log(data.toString().split('\n').length - 1);
