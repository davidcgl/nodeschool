var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  // exec() - create child process, buffer output until child exits (max 200kb)
  // spawn() - create child process, doesn't buffer output
  // fork() - create NodeJs child process, special case of spawn()
  var child = spawn(cmd, args);
  return duplexer(child.stdin, child.stdout);
}
