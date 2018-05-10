'use strict';

function dbi(name: string, age: number, height: number, marrige: boolean) {
  return `${name}\n${age}\n${height}\n${marrige}`;
}
console.log(dbi('Bence Vidosits', 22, 1.75, false));