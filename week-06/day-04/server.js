'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
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
