'use strict';

const express = require('express'),
  mysql = require('mysql'),
  app = express(),
  PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
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
