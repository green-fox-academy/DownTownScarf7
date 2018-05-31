'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('.getApple() return test', t => {
  let obj: Apple = new Apple;
  t.equal(obj.getApple(), 'apple');
  t.end();
})
