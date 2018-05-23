'use strict';

class Counter{
  private tick: number;
  private tock: number;

  constructor(tick: number = 0){
    this.tick = tick;
    this.tock = tick;
  }

  public add(num?: number) {
    if (num !== undefined) {
      this.tick += num;
    } else {
      this.tick++;
    }
  }

  public get(){
    return this.tick;
  }

  public reset(){
    this.tick = this.tock;
  }
}

export{Counter};
