var http =require('http');
var fs = require('fs');
var qs = require('querystring');
var _url = require('url');

var counter = 0;

function writeNumbers (res) {
  for(var i = 0; i < 100; i++ ){
    counter++;
    res.write(counter.toString() +"\n");
  }
}


http.createServer(function(req, res) {
  var query = _url.parse(req.url).query;
  var app = "./files/" + qs.parse(query).q + ".txt";


  // content header
  res.writeHead(200,{'content-type':'text/plain'});

  writeNumbers(res);


  //timer to open file and read contents
  setTimeout(function(){
    fs.readFile(app, 'utf8', function (err, data) {
      if(err){
        res.write("Could not find or open file for reading \n");
      } else {
        res.write(data);
      }
      res.end();
    })
  },200);



}).listen(8124);



console.log("server running at 8124");
