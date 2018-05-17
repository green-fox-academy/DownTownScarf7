'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
ctx.fillStyle = 'purple';
for (let i = 1; i <= 7; i++) {
  let size = 30 + i * 5;
  ctx.fillRect(i * 10 + size * (i / 2), i * 10 + size * (i / 2), size, size);
}
