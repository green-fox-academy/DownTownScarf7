'use strict';

const express = require('express'),
      app = express(),
      PORT = 3001,
      cars = [
        { id: 1, brand: 'BMW', type: 'X6' },
        { id: 2, brand: 'Audi', type: 'TT' },
      ];

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  });
});

app.get('/api/cars', (req, res) => {
  res.json({
    cars,
  });
});

app.post('/api/cars', (req, res) => {
  const { brand, type } = req.body;
  cars.push({
    id: cars.length + 1,
    brand,
    type,
  });
  res.json({
    cars,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
