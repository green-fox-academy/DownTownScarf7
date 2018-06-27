'use strict';

require('dotenv').config();
const express = require('express'),
  mysql = require('mysql'),
  app = express(),
  PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/test', (req, res) => {
  let sql = 'SELECT * from author;',
    queryInputs = [];

  if (req.query.country) {
    sql = 'SELECT * from author WHERE country = ?;';
    queryInputs = [req.query.country];
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    
    res.json({
      authors: rows,
    });

  });

});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
