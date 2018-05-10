'use strict';

function triangle(lines: number) {
  let star: string = '';
  for (let i = 0; i < lines; i++) {
    star = '';
    for (let j = 0; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
  return true;
}
triangle(4);