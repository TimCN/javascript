var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.statusCode = 200;
	res.send('Hello World!');
});

app.listen(8088);


console.log(app);
