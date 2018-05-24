'use strict';

import { Pirate } from './pirates';
import { Captain } from './captain';

function rndNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Ship {
  private crew: Pirate[];
  private id: string;
  private health: number;
  private cannonNum: number;
  private rumStock: number;

  constructor(id: number) {
    this.crew = [];
    this.id = `Ship ${id}`;
    this.health = 500;
    this.cannonNum = 20;
    this.rumStock = 3;
  }

  public inspectCrew(): void {
    for (let i: number = 0; i < this.crew.length; i++) {
      console.log(this.crew[i]);
    }
  }

  public getCrewSize(): number {
    return this.crew.length;
  }

  public inspectShip(): void {
    console.log(`--------------\n${this.id}\n--------------\nCrew size: ${this.crew.length}\nHealth: ${this.health}\nCannons: ${this.cannonNum}\n--------------`);
  }

  public drinkRum(): void {
    if (this.rumStock > 0) {
      for (let i: number = 0; i < this.crew.length; i++) {
        this.crew[i].decideRum();
      }
      this.rumStock--;
    } else {
      console.log('ARRRRRRRRRRRRRRRRRRRGH!!! WE ARE OUT OF RUM MATEYS!');
    }
  }

  public recruitCrew(num: number): void {
    let temp: number = this.crew.length;
    for (let i: number = 0 + temp; i < num + temp; i++) {
      if (this.crew.length === 0) {
        this.crew.push(new Captain(i));
      } else {
        this.crew.push(new Pirate(i));
      }
    }
    console.log(`Yoohoohoo! We just recruited ${num} new seadogs!\nThe crew is now ${this.crew.length} men big!`);
  }
}

export { Ship };
