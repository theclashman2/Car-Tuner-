var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

app.use(express.static('/'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
}):
 

app.post('/query', textParser, function(req,res) {
  var keyword = req.body;
  request('https://maps.googleapis.com/maps/api/js?key=AIzaSyBxlOSIO2OxUusILsiaBWaXeaU42s-MNss&callback=initMap');
    if (!error && response.statusCode == 200) {
      var description = JSON.parse(body);
      description = JSON.stringify(description.response.docs[0].snippet);
      console.log(description);
      res.send(description);
    }
  });
});

app.listen(1337)