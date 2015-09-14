var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {
  var counts = {};
  var stream = through.obj(transform, flush);
  return duplexer(stream, counter);

  function transform (chunk, enc, cb) {
    var country = chunk.country;
    counts[country] = (counts[country] || 0) + 1;
    cb();
  }

  function flush (cb) {
    counter.setCounts(counts);
    cb();
  }
}
