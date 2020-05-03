const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');

const app = express();

const port = process.env.Port || 3003;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/bundle.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    console.log('sent compressed file');
    return res.sendFile(path.join(__dirname, '../client/dist', '/bundle.js.br'));
  } else if (req.header('Accept-Encoding').includes('gz')) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    return res.sendFile(path.join(__dirname, '../client/dist', '/bundle.js.gz'));
  }
});

app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

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


app.post('/listings', function (req, res) {
  //expects req.body to be an object with keys that include id, type, category, price, avgReview, numReview, numBeds, title, isFav
  console.log('req.body', req.body);

  db.insertListing(req.body, function(err, results) {
    if (err) {
      console.log('err', err);
      res.sendStatus(501);
    } else {
      console.log('results', results);
      res.sendStatus(201);
    }
    res.end();
  });
});


app.get('/images', function (req, res) {
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

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

module.exports = app;
