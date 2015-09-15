var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar-stream');
var through = require('through2');

var extract = tar.extract();
extract.on('entry', function (header, stream, cb) {
  if (header.type !== 'file') {
    return cb();
  }
  stream
    .pipe(crypto.createHash('md5', { encoding: 'hex' }))
    .pipe(through(function (hash, enc, cb) {
      cb(null, hash + ' ' + header.name + '\n');
    }))
    .pipe(process.stdout);
  stream.on('end', function () { cb(); });
});

var algo = process.argv[2];
var password = process.argv[3];
process.stdin
  .pipe(crypto.createDecipher(algo, password))
  .pipe(zlib.createGunzip())
  .pipe(extract);
