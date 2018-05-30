'use strict';

class Counter {
  private tick: number;
  private tock: number;

  public constructor(tick: number = 0) {
    this.tick = tick;
    this.tock = tick;
  }

  public add(num?: number): void {
    if (num !== undefined) {
      this.tick += num;
    } else {
      this.tick++;
    }
  }

  public get(): number {
    return this.tick;
  }

  public reset(): void {
    this.tick = this.tock;
  }
}

export { Counter };
