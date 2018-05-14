export{};
'use strict'

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function revStr(inStr:string):string{
  return inStr.split('').reverse().join('');
};
console.log(revStr(reversed));
