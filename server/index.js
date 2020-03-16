var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/listings', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/images', urlencodedParser, function (req, res) {
  items.selectLocation(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3003, function() {
  console.log('listening on port 3003!');
});