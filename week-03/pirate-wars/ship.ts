'use strict';

import { Pirate } from './pirates';
import { Captain } from './captain';

// RNG
function rndNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Stops the entire program for specified time
function wait(ms: number): void {
  let start: number = Date.now(),
      now: number = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

class Ship {
  private crew: Pirate[];
  private id: string;
  private health: number;
  private maxHealth: number;
  private cannonNum: number;
  private rumStock: number;
  private sunk: boolean;

  constructor(id: number, health: number = 5000, cannonNum: number = 20, crewSize: number = 20) {
    this.crew = [];
    this.id = `Ship ${id}`;
    this.health = health;
    this.maxHealth = this.health + 0;
    this.cannonNum = cannonNum;
    this.rumStock = 3;
    this.sunk = false;
    this.recruitCrew(crewSize);
    console.log(`${this.id} on the seven seas with ${crewSize} seadogs!`);
  }

  public inspectCrew(): void {
    for (let i: number = 0; i < this.crew.length; i++) {
      console.log(this.crew[i]);
    }
  }

  public getCrewSize(): number {
    return this.crew.length;
  }

  public isDead(): boolean {
    return this.sunk;
  }

  // Logs name, crewsize, health and the number of cannons
  public inspectShip(): void {
    console.log(`--------------\n${this.id}\n--------------\nCrew size: ${this.crew.length}\nHealth: ${this.health}\nCannons: ${this.cannonNum}\n--------------`);
  }

  // Use Pirate object's decideRum method on every pirate if they have any in stock
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

  // The first pirate on a ship is getting the Captain class instead of a normal Pirate
  private recruitCrew(num: number): void {
    let temp: number = this.crew.length;
    for (let i: number = 0 + temp; i < num + temp; i++) {
      if (this.crew.length === 0) {
        this.crew.push(new Captain(i, this.id));
      } else {
        this.crew.push(new Pirate(i, this.id));
      }
    }
  }

  // Decides the right approach in battle
  // If a ship has maximum health, then it should fire with less cannons, else it would almost always win
  // Uses recursion for the targeted ship to return fire
  public battle(target: Ship): void {
    if (this.health > 0 && this.getCrewSize() > 0 && target.health > 0 && target.getCrewSize() > 0) {
      if (this.cannonNum > 0) {
        if (this.health === this.maxHealth) {
          let temp: number = rndNum(Math.floor(this.cannonNum / 3), this.cannonNum);
          console.log(`${this.id} engaged ${target.id} with ${temp} cannons.`);
          target.fireAt(temp);
        } else {
          console.log(`${this.id} firing at ${target.id} with ${this.cannonNum} cannons.`);
          target.fireAt(this.cannonNum);
        }
      } else {
        console.log(`${this.id} is ramming ${target.id} for ${Math.floor(this.health / 4)} damage and ${this.getCrewSize()} pirates are boarding ${target.id} which has ${target.getCrewSize()} pirates`);
        target.modHealth(Math.floor(this.health / 4));
        target.board(this);
      }
     // wait(100);
      target.battle(this);
    } 
  }

  // Changes health, checks if the ship has sunk or has no crew
  private modHealth(num: number): void {
    this.health += num;
    if (this.health <= 0) {
      this.health = 0;
      console.log(`${this.id} just sunk!`);
      this.sunk = true;
    } else if (this.getCrewSize() <= 0){
      console.log(`${this.id}'s crew perished!`);
      this.sunk = true;
    }
  }

  // Fires at current ship
  // All cannons fire once except if target ship sinks between cannonfires
  private fireAt(cannonNum: number): void {
    for (let i: number = 0; i < cannonNum; i++) {
      if (this.health > 0 && this.getCrewSize() > 0) {
        this.modHealth(-Math.abs(rndNum(10, 100)));
        if (rndNum(0, 100) < 15) {
          this.cannonNum--;
          if (this.cannonNum < 0) {
            this.cannonNum = 0;
          }
        }
        if (rndNum(0, 100) < 25) {
          this.damageCrew(rndNum(1, 5), rndNum(20, 50));
        }
      } else {
        break;
      }
    }
    console.log(`${this.id} has ${this.health} health, ${this.cannonNum} cannon(s) and ${this.getCrewSize()} pirate(s)`);
  }

  // Damages random crewmembers and removes them if they are dead
  private damageCrew(numOfPirates: number, damage: number): void {
    for (let i: number = 0; i < numOfPirates; i++) {
      if (this.getCrewSize() > 0) {
        this.crew[rndNum(0, this.getCrewSize() - 1)].modHealth(-Math.abs(damage));
        this.cleanDeck();
      } else {
        break;
      }
    }
  }

  private cleanDeck(): void {
    this.crew = this.crew.filter(pirate => {
      return !pirate.isDead();
    })
  }

  // Ram and board the other ship
  private board(attacker: Ship): void {
    while (attacker.getCrewSize() > 0 && this.getCrewSize() > 0) {
      for (let i: number = 0; i < attacker.getCrewSize(); i++) {
        if (attacker.crew[i] !== undefined && this.crew[i] !== undefined) {
          attacker.crew[i].fight(this.crew[i]);
          this.cleanDeck();
          attacker.cleanDeck();
        } else {
          break;
        }
      }
    }
    this.modHealth(0);
    attacker.modHealth(0);
  }
}

export { Ship };
