'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

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

app.get('/api/attractions/:id', (req, res) => {
  const sql = `SELECT * FROM attractions WHERE id = (?);`;
  
  conn.query(sql, req.params.id, (err, rows) => {
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

app.post('/api/add', (req, res) => {
  const { name, city, category, price, longitude, lattitude, recommended_age, duration } = req.body;
  if (name && city && category && price && longitude && lattitude && recommended_age && duration) {
    const sql = req.body.id ? 
      `UPDATE attractions
       SET 
       attr_name = "${name}", 
       city = "${city}", 
       category = "${category}", 
       price = "${price}", 
       longitude = "${longitude}", 
       lattitude = "${lattitude}", 
       recommended_age = "${recommended_age}", 
       duration = "${duration}" 
       WHERE 
       (id = "${req.body.id}");`
    :
      `INSERT INTO attractions (
        attr_name, 
        city, 
        category, 
        price, 
        longitude, 
        lattitude, 
        recommended_age, 
        duration
      ) 
      VALUE (
        "${name}", 
        "${city}", 
        "${category}", 
        "${price}", 
        "${longitude}", 
        "${lattitude}", 
        "${recommended_age}", 
        "${duration}"
      );`;
  
    conn.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
  
      res.json({
        status: 'ok',
        id: rows.insertId,
      });
    });
  }

  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }

    res.json({
      status: 'fail',
      id: 'N/A',
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
