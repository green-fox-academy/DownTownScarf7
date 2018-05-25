'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class Circle {
  private _posX: number;
  private _posY: number;
  private _radius: number;
  private _startAngle: number;
  private _endAngle: number;
  private _color: string;

  constructor(posX: number, posY: number, radius: number){
    this._posX = posX;
    this._posY = posY;
    this._radius = radius;
    this._startAngle = 0;
    this._endAngle = Math.PI * 2;
    this._color = this._getColor();
    this._drawCircle();
    this.initFractCircle();
  }

  public initFractCircle(): void {
    let self: Circle = this;
    if (this._radius > 10) {
      setTimeout(function() {
        new Circle(self._posX, Math.floor(self._posY - self._radius / 2), Math.floor(self._radius / 2));
        new Circle(Math.floor(self._posX - self._radius * 1.1 / 3), Math.floor(self._posY + self._radius / 3), Math.floor(self._radius / 2));
        new Circle(Math.floor(self._posX + self._radius * 1.1 / 3), Math.floor(self._posY + self._radius / 3), Math.floor(self._radius / 2));
      }, 1000);
    }
  }

  private _getColor(): string{
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
  }

  private _drawCircle(): void{
    ctx.beginPath();
    ctx.strokeStyle = this._color;
    ctx.arc(this._posX, this._posY, this._radius, this._startAngle, this._endAngle);
    ctx.stroke();
  }

}

let c: Circle = new Circle(500, 500, 500);
