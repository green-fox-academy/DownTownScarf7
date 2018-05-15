export{};
'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums (list) {
  let checkList:number[] = [4, 8, 12, 16];
  let check:boolean = true;
  list.map(elem => {
    if (!checkList.indexOf(elem)) {
      check = false;
      console.log(`"${elem}" not found!`);
    }
    return false;
  });
  return check;
}
console.log(checkNums(listOfNumbers));

//export = checkNums;
