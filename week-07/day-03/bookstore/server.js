'use strict';

require('dotenv').config();
const express = require('express'),
  mysql = require('mysql'),
  path = require('path'),
  app = express(),
  PORT = 3000;
app.use(express.static(__dirname));
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname, './index.html');
});

app.get('/api', (req, res) => {
  let sql = 'SELECT book_name FROM book_mast;';

  if (req.query.task == 2) {
    sql = `
    SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast
    LEFT JOIN author
    ON book_mast.aut_id = author.aut_id
    LEFT JOIN category
    ON book_mast.cate_id = category.cate_id
    LEFT JOIN publisher
    ON book_mast.pub_id = publisher.pub_id;`
  }

  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    
    res.json({
      book_data: rows,
    });

  });

});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
