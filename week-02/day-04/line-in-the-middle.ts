'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(350, 200);
ctx.strokeStyle = 'black';
ctx.stroke();

// draw a green vertical line to the canvas' middle.
ctx.beginPath();
ctx.moveTo(300, 150);
ctx.lineTo(300, 250);
ctx.strokeStyle = 'green';
ctx.stroke();
