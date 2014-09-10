var express = require('express');

var app = express();
var port = process.env.PORT || 8000;
var pageCache = {};

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/robots.txt', function(req, res) {
	res.sendFile(__dirname + '/dist/robots.txt');
});

app.listen(port);
