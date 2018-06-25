'use strict';

const express = require('express'),
      app = express(),
      PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: +req.query.input,
      result: req.query.input * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (req.query.name){
    res.json({
      error: 'Please provide a title!',
    });
  } else {
    res.json({
      error: 'Please provide a name!',
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: `${req.params.appendable}a`,
  });
})

function sum(num) {
  let temp = 0;
  for (let i = 0; i <= num; i++) {
    temp += i;
  }
  return temp;
}

function factor(num) {
  let temp = 1;
  for (let i = 2; i <= num; i++) {
    temp *= i;
  }
  return temp;
}

app.post('/dountil/:what', (req, res) => {
  if (req.params.what && req.body.until) {
    if (req.params.what === 'sum') {
      res.json({
        result: sum(req.body.until),
      });
    } else if (req.params.what === 'factor') {
      res.json({
        result: factor(req.body.until),
      });
    }
  } else {
    res.json({
      error: 'Please provide a number!',
    });
  }
});

function sumArr(arr) {
  let temp = 0;
  arr.forEach(elem => {
    temp += elem;
  });
  return temp;
}

function multiplyArr(arr) {
  let temp = 1;
  arr.forEach(elem => {
    temp *= elem;
  });
  return temp;
}

function doubleArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  if (!what || !numbers) {
    res.json({
      error: what ? 'No numbers given' : 'Please provide what to do with the numbers!',
    });
  } else if (what === 'sum' || what === 'multiply' || what === 'double') {
    switch(what){
      case 'sum':
        res.json({
          result: sumArr(numbers),
        });
      case 'multiply':
        res.json({
          result: multiplyArr(numbers),
        });
      case 'double':
        res.json({
          result: doubleArr(numbers),
        });
    }
  } else {
    res.json({
      error: 'Invalid action',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
