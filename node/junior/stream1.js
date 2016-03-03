var http = require('http');

var fs = require('fs');


var stream = require('stream');

var server = http.createServer(function(req, res) {
    var path = './test.json';
    var readStream = fs.createReadStream(path);
    readStream.pipe(res);
});

server.listen(3000);


console.log('server running at 3000');
