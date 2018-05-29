'use strict';

import { Plant } from './plant';

class Flower extends Plant {
  public constructor(color) {
    super(color);
    this.threshold = 5;
  }

  public water(amount: number): void {
    super.mainWater(Math.floor(amount * 0.75));
  }
}

export { Flower };
