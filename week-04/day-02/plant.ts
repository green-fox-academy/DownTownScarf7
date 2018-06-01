'use strict';

abstract class Plant {
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
    let temp: string = '';
    this.threshold > this.waterAmount ? temp = 'needs' : temp = 'doesn\'t need';
    console.log(`The ${this.color} ${this.id} ${temp} water.`);
  }
}

export { Plant };
