export{};
'use strict';

// using built-in
let numList: number[] = [3, 4, 5, 6, 7];
console.log(numList.reverse());

// using pain and suffering
numList = [3, 4, 5, 6, 7];
let tempNumList: number[] = new Array(numList.length);
for (let i = 0; i <= numList.length - 1; i++){
  tempNumList[i] = numList[numList.length - (i + 1)];
};
numList = tempNumList;
console.log(numList);
