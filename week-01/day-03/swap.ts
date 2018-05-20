'use strict';

// (swap) Swapping a and b like a boss
function swap(num1: number, num2: number): void {
  let a: number = num1;
  let b: number = num2;

  console.log(`${a}\n${b}`);
  a = num2;
  b = num1;
  console.log(`${a}\n${b}`);
}
swap(123, 526);
