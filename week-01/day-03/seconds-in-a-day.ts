'use strict';

function timeLeft(ch: number, cm: number, cs: number): number {
  return 86400 - (ch * 60 * 60 + cm * 60 + cs);
}
console.log(timeLeft(14, 34, 42));