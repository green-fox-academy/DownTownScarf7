'use strict';

import { test } from 'tape';
import { Sum } from './sum';

let sumTest: Sum = new Sum;
test('2 element array', t => {
  t.equal(sumTest.sumOfArrElem([1, 2]), 3);
  t.end();
});

test('Empty array', t => {
  t.equal(sumTest.sumOfArrElem([]), 0);
  t.end();
});

test('1 element array', t => {
  t.equal(sumTest.sumOfArrElem([5]), 5);
  t.end();
});

test('null', t => {
  t.equal(sumTest.sumOfArrElem(null), null);
  t.end();
});
/*
// Expected type crashes file while compiling
test('string', t => {
  t.equal(sumTest.sumOfArrElem(['number']), '0number');
  t.end();
});
*/
