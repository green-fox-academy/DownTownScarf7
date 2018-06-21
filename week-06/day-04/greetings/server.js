'use strict';

const app = require('express')();
const PORT = '3000';

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', {
    title: `Welcome back, ${req.query.name ? req.query.name : 'Guest'}!`,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
