export { };
'use strict';

function bubble(arr: number[], ord: boolean = false): number[] {
  function sortNumber(a: number, b: number): number {
    return a - b;
  }
  if (ord === true) {
    return arr.sort(sortNumber).reverse();
  } else {
    return arr.sort(sortNumber);
  }
}

console.log(bubble([34, 12, 24, 9, 5]));
console.log(bubble([34, 12, 24, 9, 5], true));
