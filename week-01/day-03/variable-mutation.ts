'use strict';

let a: number = 3;
// make it bigger by 10
console.log(a);
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
console.log(b);
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
console.log(c);
c = c * 2;
console.log(c);

let d: number = 125;
// divide d's value by 5
console.log(d);
d = d / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
console.log(e);
e **= 3;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
  console.log(true);
} else {
  console.log(false);
}
let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * 2 > g1) {
  console.log(true);
} else {
  console.log(false);
}
let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
if (h % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}
let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > i2 ** 3 && i1 < i2 ** 2) {
  console.log(true);
} else {
  console.log(false);
}
let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
if (j % 3 == 0 || j % 5 == 0) {
  console.log(true);
} else {
  console.log(false);
}
let k: string = 'Apple';
// fill the k variable with its content 4 times
// I don't really know if this should be how I've done it or just "apple" * 4, I'll stick with this for now
console.log(k);
for (let i = 0; i < 4; i++) {
  k += k;
}
console.log(k);