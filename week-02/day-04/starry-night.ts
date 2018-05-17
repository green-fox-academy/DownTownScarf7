'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
function rndNum(min: number,max: number): number{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function main(starNum): void {
  // background
  ctx.fillRect(0, 0, 600, 400);
  // stars
  for (let i = 0; i <= starNum; i++) {
    let size: number = rndNum(1, 3);
    ctx.fillStyle = `rgba(255, 255, 255, ${rndNum(1, 50) / 100})`;
    ctx.fillRect(rndNum(0, 600), rndNum(0, 400), size, size);
  }
}
main(800);
