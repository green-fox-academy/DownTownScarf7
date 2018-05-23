'use strict';

class Animal {
  private hunger: number;
  private thirst: number;

  constructor(){
    this.hunger = 50;
    this.thirst = 50;
  }

  public eat() {
    this.hunger--;
  }

  public drink() {
    this.thirst--;
  }

  public play() {
    this.hunger++;
    this.thirst++;
  }

  public getStatus() {
    console.log(`Hunger: ${this.hunger}\nThirst:${this.thirst}`);
  }
}

export {Animal};
