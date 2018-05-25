'use strict';

function bunny(num: number): number {
  let temp: number = 2;
  if (num > 1) {
    temp += bunny(num - 1);
    return temp;
  } else {
    return 2;
  }
}

console.log(bunny(20));
