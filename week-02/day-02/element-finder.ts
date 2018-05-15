export{};
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
function containsSeven(list: any){
  if (list.indexOf(7)) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}
function findElem(list, elem){
  if (list.includes(elem)) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}
console.log(containsSeven(numbers));
console.log(findElem(numbers, 7));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
// export = containsSeven;
