'use strict';

function adder(num: number): number {
  if (num > 1) {
    num += adder(num - 1);
  }
  return num;
}

console.log(adder(10));
