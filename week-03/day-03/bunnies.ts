'use strict';

function bunnies(num: number): number {
  let temp: number;
  if (num % 2 === 0) {
    temp = 3;
  } else {
    temp = 2;
  }
  if (num > 1) {
    temp += bunnies(num - 1);
    return temp;
  } else {
    return 2;
  }
}

console.log(bunnies(5));
