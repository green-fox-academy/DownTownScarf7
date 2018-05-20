'use strict';

function triangle(lines: number): void {
  let star: string = '';
  for (let i = 0; i < lines; i++) {
    star += '*';
    console.log(star);
  }
}
triangle(4);
