'use strict';

import { test } from 'tape';
import { letterCount } from './material-review';

test('Simple single letter word', t => {
  let counter = letterCount('a');
  t.deepEqual(counter, {a: 1});
  t.end();
})

test('Simple multiple letter word', t => {
  let counter = letterCount('aabc');
  t.deepEqual(counter, {a: 2, b: 1, c: 1});
  t.end();
})

test('Empty string', t => {
  let counter = letterCount('');
  t.deepEqual(counter, {});
  t.end();
})
