export { };
'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(list1: string[], list2: string[]): string[] {
  let madeInHeaven: string[] = list1;
  let step: number = 0;
  for (let i = 1; i <= (list1.length); i += 2) {
    madeInHeaven.splice(i, 0, boys[step]);
    step++;
  }
  return madeInHeaven;
}

console.log(makingMatches(girls, boys));

//export = makingMatches;
