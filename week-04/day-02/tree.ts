'use strict';

import { Plant } from './plant';

export class Tree extends Plant {
  public constructor(color: string) {
    super(color);
    this.threshold = 10;
    this.id = 'tree';
  }

  public water(amount: number): void {
    super.mainWater(amount * 0.40);
  }
}
