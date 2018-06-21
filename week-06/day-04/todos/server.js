'use strict';

const app = require('express')(),
      PORT = 3000;
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', {
    todos,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
