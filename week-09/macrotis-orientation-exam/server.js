'use strict';

require('dotenv').config();
const express = require('express'),
  mysql = require('mysql'),
  path = require('path'),
  app = express(),
  PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/attractions', (req, res) => {
  let sql = 'SELECT * FROM attractions;';

  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }

    res.json({
      attractions: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
