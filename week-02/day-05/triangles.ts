'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawTriangle(lines: number): void {
  for (let i = 0; i <= canvas.width; i += lines) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - i / 2, i);
    ctx.lineTo(canvas.width / 2 + i / 2, i);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width - i, canvas.height);
    ctx.lineTo(canvas.width - i / 2, canvas.height - i);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i, canvas.height);
    ctx.lineTo(i / 2, canvas.height - i);
    ctx.stroke();
  }
}
drawTriangle(20);
