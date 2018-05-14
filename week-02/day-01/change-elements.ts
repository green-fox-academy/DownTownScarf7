export{};
'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];

numList = numList.map((value, index) => {
 if (value !== index + 1) {
   value = index + 1;
 }
 return value;
});
console.log(numList[3]);
