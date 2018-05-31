'use strict';

import { test } from 'tape';
import { anagram } from './anagram';

test('Simple test', t => {
  t.equal(anagram('hello my baby', 'hmb'), true);
  t.end();
});

test('Uppercase string', t => {
  t.equal(anagram('HELLO MY BABY', 'hmb'), true);
  t.end();
});

test('Uppercase anagram', t => {
  t.equal(anagram('hello my baby', 'HMB'), true);
  t.end();
});

test('Single letter string', t => {
  t.equal(anagram('h', 'h'), true);
  t.end();
});

test('Failing test', t => {
  t.equal(anagram('asd as dsad', 'pie'), false);
  t.end();
});
