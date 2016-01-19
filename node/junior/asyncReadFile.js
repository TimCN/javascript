var http = require('http');
var fs = require('fs');

http.createServer( function (req, res) {

  fs.readFile('helloWorld.js', 'utf8', function (err, data) {
    res.writeHead(200,{'content-type':'text/plain'});
    if ( err ) {
      res.write("Could not find or open file for reading\n");
    } else {
      res.write(data);
    }
    res.end();
  })
}).listen(8124);

console.log("server running at 8124");
