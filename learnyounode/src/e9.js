var http = require('http');
var concat = require('concat-stream');
var async = require('async');

// Process each URL in series.
var urls = process.argv.slice(2);
async.series([
  processUrl.bind(null, urls[0]),
  processUrl.bind(null, urls[1]),
  processUrl.bind(null, urls[2]),
], function (err, dataArray) {
  if (err) console.log(err);
  dataArray.forEach(function (data) {
    console.log(data);
  });
});

function processUrl (url, callback) {
  http.get(url, function (response) {
    response.pipe(concat(function (buffer) {
      var data = buffer.toString();
      callback(null, data);
    }));
    response.on('error', callback);
  }).on('error', callback);
}

