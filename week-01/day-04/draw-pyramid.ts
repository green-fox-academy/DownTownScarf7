'use strict';

function pyramid(lines: number) {
  let star: string = '';
  for (let i: number = 0; i < lines; i++) {
    star = '';
    for (let k: number = i; k < lines; k++){
      star += ' ';
    }
    star += '*';
    for (let j = 0; j <= i; j++) {
      if (j !== 0) {
        star += "**";
      }
    }
    console.log(star);
  }
  return true;
}
pyramid(4);