'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
for (let i = 4; i >= 1; i--) {
  let colorPalette: string[] = ['black', 'green', 'blue', 'pink'];
  ctx.fillStyle = colorPalette[i];
  ctx.fillRect(100, 50, i * 50, i * 75);
}
