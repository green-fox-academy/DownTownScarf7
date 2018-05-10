'use strict';

function cuboid(a: number, b: number, c: number) {
  return `Surface Area: ${2 * (a * b + a * c + b * c)}\nVolume: ${a * b * c}`;
}
console.log(cuboid(5, 5, 15));
