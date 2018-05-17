'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function rndColor(): string {
  let r = 255*Math.random()|0,
      g = 255*Math.random()|0,
      b = 255*Math.random()|0;
  return `rgb(${r}, ${g}, ${b})`;
}
function drawSquare(size: number): void {
  ctx.fillStyle = rndColor();
  ctx.fillRect(300 - size / 2, 200 - size / 2, size, size);
}
drawSquare(100);
drawSquare(75);
drawSquare(50);
