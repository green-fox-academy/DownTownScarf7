export{};
'use strict';

function unique(arr: number[]) { 
  function uniqueSort(value, index, self) { 
    return self.indexOf(value) === index;
  }
  return arr.filter(uniqueSort);
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
