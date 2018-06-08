'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  private plants: any[];

  public constructor(numFlowers: number = 0, numTrees: number = 0) {
    this.plants = [];
    this.initGarden(numFlowers, numTrees);
  }

  public initGarden(numFlowers: number, numTrees: number): void {
    for (let i: number = 0; i <= numFlowers; i++) {
      this.plants.push(new Flower('red'));
    }
    for (let i: number = 0; i <= numTrees; i++) {
      this.plants.push(new Tree('green'));
    }
  }

  public addFlower(color: string): void {
    this.plants.push(new Flower(color));
  }

  public addTree(color: string): void {
    this.plants.push(new Tree(color));
  }

  public checkGarden(): void {
    for (let i: number = 0; i < this.plants.length; i++) {
      this.plants[i].checkPlant();
    }
  }

  public water(amount: number): void {
    console.log(`Watering with ${amount}`)
    for (let i: number = 0; i < this.plants.length; i++) {
      this.plants[i].water();
    }
    this.checkGarden();
  }
}

export { Garden };
