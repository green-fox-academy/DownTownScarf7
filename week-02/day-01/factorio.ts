export{};
'use strict';

function factorio(inNum: number): number{
  let inNumFac: number = 1;
  for (let i: number = 1; i <= inNum; i++){
    inNumFac *= i;
  };
  return inNumFac;
};
console.log(factorio(5));
