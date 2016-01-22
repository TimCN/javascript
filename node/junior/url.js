var http = require('http');

var url = require('url');

http.createServer(function(req,res) {
  var urlObj = url.parse(req.url,true,true);

  console.log("urlObj with query, host, pathname: ")
  console.log(urlObj);
  res.writeHead(200,{'content-type':'text/plain'});
  res.end();
}).listen(8124);

console.log("server running at 8124");

//http://127.0.0.1:8124/a/b/c?q1=1&q2=2&q3=queryThree#hashvar

//以后就可以在这个地方不用 （require 一个） querystring
