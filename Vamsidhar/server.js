var express = require('express');
var fs = require('fs');
var console = require('console');

var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/api/flights', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var file = fs.readFileSync(
    req.query._tripType == 'oneway' 
      ? 'flights.json' 
      : 'flights_two_way.json', 
    {encoding: 'utf8'});
  res.json(JSON.parse(file));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
