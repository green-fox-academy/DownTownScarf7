'use strict';

// Since .toFixed() returns a string I found this method to be better in this case
function bmi(massInKg: number, heightInM: number): number{
  return Math.round((massInKg / heightInM / heightInM) * 100) / 100;
}
console.log(bmi(81.2, 1.78));
