'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
function lineCenter(posX: number, posY: number): void {
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}
for (let j = 0; j <= 1; j++){
  for (let i = 0; i <= 600; i += 20){
    lineCenter(i, j * 400);
  }
  for (let i = 0; i <= 400; i += 20){
    lineCenter(j * 600, i);
  }
}
