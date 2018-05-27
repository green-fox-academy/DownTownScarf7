export{};
'use strict';

let typo: string = 'kuty';

function appendA(inStr: string): string{
  inStr += 'a';
  return inStr;
};
console.log(appendA(typo));
