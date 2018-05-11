'use strict';

function diamond(lines: number) {
  let star: string = '';
  let lines_save: number = lines;
  let odd: boolean = false;
  if (lines % 2 == 0) {
    odd = false;
  } else {
    odd = true;
  }
  lines /= 2;
  lines_save = lines;
  lines = Math.round(lines);
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
  lines = Math.floor(lines_save);
  for (let i: number = 0; i < lines; i++) {
    if (odd == true) {
      star = ' ';
    } else {
      star = '';
    }
    for (let k: number = i; k + lines >= lines; k--){
      star += ' ';
    }
    star += '*';
    for (let j = 0; j + lines >= i + 1; j--) {
      if (j !== 0) {
        star += "**";
      }
    }
    console.log(star);
  }
  return true;
}
diamond(10);