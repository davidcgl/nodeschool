var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {
  // Currently processing { name: <genre>, books: [] }
  var accumulator;
  return combine(split(), through(transform, flush), zlib.createGzip());

  function transform (chunk, enc, cb) {
    if (chunk.length === 0) {
      return cb();
    }
    var row = JSON.parse(chunk);
    if (row.type === 'genre') {
      if (accumulator) {
        this.push(JSON.stringify(accumulator) + '\n');
      }
      accumulator = { name: row.name, books: [] };
    } else if (row.type === 'book') {
      accumulator.books.push(row.name);
    }
    cb();
  }

  function flush (cb) {
    if (accumulator) {
      this.push(JSON.stringify(accumulator) + '\n');
    }
    cb();
  }
}
