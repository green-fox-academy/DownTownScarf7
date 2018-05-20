export{};
'use strict';

let num1: number = 3,
    num2: number = 345,
    str: string = 'Apple';

// make it bigger by 10
console.log(`${num1} plus 10 is:`);
num1 += 10;
console.log(num1);

num1 = 100;
// make it smaller by 7
console.log(`${num1} minus 7 is:`);
num1 -= 7;
console.log(num1);

num1 = 44;
// double num1's value
console.log(`${num1} multiplied by 2 is:`);
num1 *= 2;
console.log(num1);

num1 = 125;
// divide num1's value by 5
console.log(`${num1} divided by 5 is:`);
num1 /= 5;
console.log(num1);

num1 = 8;
// what's the cube of num1's value?
console.log(`${num1}'s cube value is:`);
num1 **= 3;
console.log(num1);

num1 = 123;
// tell if num1 is bigger than num2 (as a boolean)
if (num1 > num2) {
  console.log(true);
} else {
  console.log(false);
}

num1 = 350;
num2 = 200;
// tell if the double of num2 is bigger than num1 (as a boolean)
if (num2 * 2 > num1) {
  console.log(true);
} else {
  console.log(false);
}

num1 = 1357988018575474;
// tell if num1 has 11 as a divisor (as a boolean)
if (num1 % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}

num1 = 10;
num2 = 3;
// tell if num1 is higher than num2 squared and smaller than num2 cubed (as a boolean)
if (num1 > num2 ** 3 && num1 < num2 ** 2) {
  console.log(true);
} else {
  console.log(false);
}

num1 = 1521;
// tell if num1 is dividable by 3 or 5 (as a boolean)
if (num1 % 3 == 0 || num1 % 5 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// fill the str variable with its content 4 times
// I don't really know if this should be how I've done it or just "apple" * 4, I'll stick with this for now
for (let i: number = 0; i < 4; i++) {
  str += str;
}
console.log(str);
// or
str = 'Apple';
let temp: string = '';
for (let i: number = 0; i < 4; i++) {
  temp += str;
}
str = temp;
console.log(str);
