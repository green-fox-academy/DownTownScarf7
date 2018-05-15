export{};
'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function filterCandy(list:any[]):void{
  list.forEach(elem => {
    if (elem.candies > 4) {
      console.log(elem.name);
    }
  });
}
function avgCandy(list:any[]):number{
  let avgCount:number = 0;
  let numIter:number = 0;
  list.forEach(elem => {
    avgCount += elem.candies;
    numIter++;
  });
  return (avgCount / numIter);
}
filterCandy(students);
console.log(avgCandy(students));
// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average
