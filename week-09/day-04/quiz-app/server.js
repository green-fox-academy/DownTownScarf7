'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));
app.use(express.json());
app.use('/pages', express.static('pages'));
app.use('/scripts', express.static('scripts'));
app.use('/styles', express.static('styles'));
app.use('/assets', express.static('assets'));
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/api/questions', (req, res) => {
  const sqlQuestions = 'SELECT * FROM questions';
  conn.query(sqlQuestions, (err, resTextQ) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }

    res.json(resTextQ);
  });
});

app.get('/api/game', (req, res) => {
  const sqlQuestions = `SELECT * FROM questions ORDER BY RAND() LIMIT 1`;

  conn.query(sqlQuestions, (err, resTextQ) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }

  const sqlAnswers = `SELECT * FROM answers WHERE question_id = "${resTextQ[0].id}"`;

    conn.query(sqlAnswers, (err, resTextA) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
  
      res.json({
        id: resTextQ[0].id,
        question: resTextQ[0].question,
        answers: resTextA,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
