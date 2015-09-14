var sum = 0;

// process is a global object.
// process.argv contains command line arguments:
//   process.argv[0] == 'node'
//   process.argv[1] == path to program
for (var i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}

console.log(sum);
