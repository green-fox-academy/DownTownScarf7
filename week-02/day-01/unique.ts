export{};
'use strict';

function uniqueSort(value, index, self) { 
  return self.indexOf(value) === index;
}

function unique(arr: number[]) { 
  return arr.filter(uniqueSort);
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
