'use strict';

class Car {
  private gasAmount: number;
  private capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }

  public getRefillSize(): number{
    return this.capacity - this.gasAmount;
  }

  public setGasAmount(num) {
    this.gasAmount = num;
  }
}

export { Car };
