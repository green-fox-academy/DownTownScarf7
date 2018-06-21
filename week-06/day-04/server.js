'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/hola', (req, res) => {
  res.send('Hola!');
});

app.get('/greet/:message/', (req, res) => {
  console.log(req.query);
  let name = 'Fox';
  if (req.query.name !== undefined) {
    name = req.query.name;
  }
  res.send(`${req.params.message}, ${req.query.name}`);
});

app.get('/cars/:type/', (req, res) => {
  res.send(req.params.type);
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
