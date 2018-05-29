'use strict';

import { Plant } from './plant';

class Tree extends Plant {
  public constructor(color) {
    super(color);
    this.threshold = 10;
  }

  public water(amount: number): void {
    super.mainWater(Math.floor(amount * 0.40));
  }
}

export { Tree };
