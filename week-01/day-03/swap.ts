'use strict';

// (swap) Swapping a and b like a boss
function swap(num1, num2) {
  let a: number = num1;
  let b: number = num2;

  console.log(`${a}\n${b}`);
  
  a = num2;
  b = num1;

  console.log(`${a}\n${b}`);

  return true;
}
swap(123, 526)
