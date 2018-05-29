'use strict';

class Plant {
  protected color: string;
  protected waterAmount: number;
  protected threshold: number;

  protected constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
    this.threshold = 0;
  }

  protected mainWater(amount: number): void {
    if (this.threshold > this.waterAmount) {
      this.waterAmount += amount;
    }
  }
}

export { Plant };
