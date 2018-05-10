'use strict';

// Such calculations, much bmi
function bmi(massInKg, heightInM){
  return (massInKg/heightInM/heightInM).toFixed(2);
}
console.log(bmi(81.2, 1.78));
