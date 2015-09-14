var concat = require('concat-stream');

process.stdin.pipe(concat({ encoding: 'string' }, function (buffer) {
    console.log(buffer.split('').reverse().join(''));
}));
