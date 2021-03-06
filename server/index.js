require('newrelic');
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

app.get('/loaderio-8752c46ffdfa877235862011497a3737.txt', function (req, res) {
  const options = {
    root: path.join(__dirname, '../')
  };
  res.sendFile('loaderio-8752c46ffdfa877235862011497a3737.txt', options, (err) => {
    if (err) {
      res.sendStatus(500).end();
    } else {
      res.sendStatus(200).end();
    }
  });
});

app.get('/bundle.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
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

app.get('/listings/:id', function (req, res) {
  db.selectRelatedListings(req.params.id, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data.rows);
    }
    res.end();
  });
});

// refactor to post /listing:id && add post relatedListing:id
app.post('/listings', function (req, res) {
  //expects req.body to be an object with keys that include id, type, category, price, avgReview, numReview, numBeds, title, isFav

  db.insertListing(req.body, function(err, results) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
    res.end();
  });
});

// refactor to put /listing:id && add post relatedListing:id
app.put('/listings', function(req, res) {
  let queryParams = [];
  for (let each in req.body) {
    queryParams.push(req.body[each]);
  }
  db.updateListing(queryParams, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
    res.end();
  });

});

// refactor to delete /listing:id && add delete relatedListing:id
app.delete('/listings', function(req, res) {
  db.deleteListing([req.query.id], function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
    res.end();
  });
});

app.get('/images', function (req, res) {
  db.selectImages(req.body, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      const images = [data.rows[0].image_url_1, data.rows[0].image_url_2, data.rows[0].image_url_3, data.rows[0].image_url_4, data.rows[0].image_url_5, data.rows[0].image_url_6];
      res.json(images);
    }
  });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', '/index.html'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

module.exports = app;
