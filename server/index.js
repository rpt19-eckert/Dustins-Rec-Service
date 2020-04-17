const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/listings', function (req, res) {
  db.selectAll(req.body, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data);

    }
  });
});


app.get('/images', urlencodedParser, function (req, res) {
  console.log('server /images');
  db.selectImages(req.body, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

app.get('/:id', (req, res) => {
  console.log('send file');
  res.sendFile(path.join(__dirname, '../client/dist', '/index.html'));
});

app.listen(3003, function() {
  console.log('listening on port 3003!');
});

module.exports = app;
