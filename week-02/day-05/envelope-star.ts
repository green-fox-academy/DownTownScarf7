'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawStar(lines: number): void {
  ctx.strokeStyle = 'green';
  for (let i = 0; i <= canvas.width / 2; i += lines) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, i);
    ctx.lineTo(canvas.width / 2 - i, canvas.height / 2);
    ctx.stroke();
  }
  for (let i = 0; i <= canvas.width / 2; i += lines) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, i);
    ctx.lineTo(canvas.width / 2 + i, canvas.height / 2);
    ctx.stroke();
  }
  for (let i = 0; i <= canvas.width / 2; i += lines) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height - i);
    ctx.lineTo(canvas.width / 2 - i, canvas.height / 2);
    ctx.stroke();
  }
  for (let i = 0; i <= canvas.width / 2; i += lines) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height - i);
    ctx.lineTo(canvas.width / 2 + i, canvas.height / 2);
    ctx.stroke();
  }
}
drawStar(20);
