'use strict';

import { Car } from './car';

class Station {
  private gasAmount: number;

  constructor() {
    this.gasAmount = 200;
  }

  public refill(car: Car): void {
    this.gasAmount -= car.getRefillSize();
    console.log(`Refilled ${car.getRefillSize()} amount of gas.`);
    car.setGasAmount(car.getRefillSize());
  }
}

export { Station };
