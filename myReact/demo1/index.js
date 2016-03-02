// var http = require('http');
require('babel-polyfill');

import http from 'http';


var server = http.createServer(function(req, res) {


  res.writeHead(200,{"Content-Type":"text/plain"});

  res.end("hello world!");

});

server.listen(8080);

console.log("server running at 8080");
