export{};
'use strict';

function unique(arr: number[]) { 
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
