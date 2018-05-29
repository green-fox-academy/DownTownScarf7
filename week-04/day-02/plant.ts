'use strict';

class Plant {
  protected color: string;
  protected waterAmount: number;
  protected threshold: number;
  protected id: string;

  protected constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  protected mainWater(amount: number): void {
    if (this.threshold > this.waterAmount) {
      this.waterAmount += amount;
    }
  }

  protected checkPlant(): void {
    if (this.threshold > this.waterAmount) {
      console.log(`The ${this.color} ${this.id} needs water.`);
    } else {
      console.log(`The ${this.color} ${this.id} doesn't need water.`);
    }
  }
}

export { Plant };
