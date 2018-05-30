'use strict';

class Animal {
  private hunger: number;
  private thirst: number;

  public constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  public eat(): void {
    this.hunger--;
  }

  public drink(): void {
    this.thirst--;
  }

  public play(): void {
    this.hunger++;
    this.thirst++;
  }

  public getStatus(): void {
    console.log(`Hunger: ${this.hunger}\nThirst:${this.thirst}`);
  }
}

export { Animal };
