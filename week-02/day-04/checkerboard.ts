export { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.
let tgl: boolean = false, unlock: boolean = false;

for (let j: number = 0; j <= 350; j += 50) {
  for (let i: number = 0; i <= 550; i += 50) {
    if (tgl && unlock) {
      i = 25;
      unlock = false;
    }
    ctx.fillRect(i * 2, j, 50, 50);
  }
  tgl = !tgl;
  unlock = true;
}
