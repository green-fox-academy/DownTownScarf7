'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
let list1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290], [10, 10]], list2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
function connectDot(posXY: number[][]): void {
  let prevPos: number[] = [posXY[0][0], posXY[0][1]];
  posXY.forEach(elem => {
    ctx.beginPath();
    ctx.moveTo(prevPos[0], prevPos[1]);
    ctx.lineTo(elem[0], elem[1]);
    prevPos = [elem[0], elem[1]];
    ctx.stroke();
  })
}
connectDot(list1);
connectDot(list2);
