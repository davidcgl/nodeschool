var crypto = require('crypto');

var algo = 'aes256';
var password = process.argv[2];
process.stdin
  .pipe(crypto.createDecipher(algo, password))
  .pipe(process.stdout);
