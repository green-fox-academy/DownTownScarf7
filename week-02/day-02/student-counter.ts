export{};
'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function candy(arr:any[]):number {
  let candNum = 0;
  arr.forEach(elem => {
    candNum += elem.candies;
  });
  return candNum;
}
function ageSum(arr:any[]):number{
  let age = 0;
  arr.forEach(elem => {
    if (elem.candies < 5) {
      age += elem.age;
    }
  });
  return age;
}

console.log(candy(students));
console.log(ageSum(students));


// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
