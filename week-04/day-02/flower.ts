'use strict';

import { Plant } from './plant';

class Flower extends Plant {
  public constructor(color) {
    super(color);
    this.threshold = 5;
    this.id = 'flower';
  }

  public water(amount: number): void {
    super.mainWater(amount * 0.75);
  }
}

export { Flower };
