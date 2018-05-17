'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.
function horizontalDraw(posX: number, posY: number): void {
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.lineTo(posX + 50, posY);
  ctx.stroke();
}
horizontalDraw(200, 100);
