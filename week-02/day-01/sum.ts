export{};
'use strict';

function sum(inNum: number): number {
  let endSum: number = 0;
  for (let i = 0; i <= inNum; i++) {
    endSum += i;
  };
  return endSum;
};
console.log(sum(5));