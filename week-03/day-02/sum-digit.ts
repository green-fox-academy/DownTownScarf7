'use strict';

function sum(num: number): number {
  let temp: number = 0;
  if (num > 0) {
    temp += num % 10;
    temp += sum(Math.floor(num / 10));
  }
  return temp;
}

console.log(sum(12345));
