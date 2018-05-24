'use strict';

let defStr: string = 'xxxxabcxasdxx';

function rmX(str:string): string {
  if (str.indexOf('x') >= 0) {
    str = rmX(str.replace('x', ''));
  }
  return str;
}
console.log(rmX(defStr));
