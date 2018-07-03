'use strict';

const test = require('tape'),
  poker = require('./poker');

test('test', t => {
  t.equal(poker().length, 5);
  t.end();
});
