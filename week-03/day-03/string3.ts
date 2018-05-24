export{};
'use strict';

let defStr: string = 'abcdefghijk';
console.log(`${defStr.substr(0, 1)}*${defStr.substr(1)}`);
function addStar(str: string, pos: number): string {
  if (str.charAt(str.length - 2) !== '*') {
    str = addStar(`${str.substr(0, pos + 1)}*${str.substr(pos + 1)}`, pos + 2);
  }
  return str;
}

console.log(addStar(defStr, 0));
