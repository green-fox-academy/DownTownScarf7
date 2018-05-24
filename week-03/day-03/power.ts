'use strict';

function power(num: number, pow: number): number {
  pow--;
  if (pow > 0) {
    num *= power(num, pow);
  }
  return num;
}

console.log(power(5, 2));
