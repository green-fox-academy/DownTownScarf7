'use strict';

import { Pirate } from './pirates';
import { Captain } from './captain';

function rndNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait(ms: number): void {
  let start: number = Date.now(),
      now: number = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

class Ship {
  private _crew: Pirate[];
  private _id: string;
  private _health: number;
  private _maxHealth: number;
  private _cannonNum: number;
  private _rumStock: number;
  private _sunk: boolean;

  constructor(id: number, crewSize: number = 20) {
    this._crew = [];
    this._id = `Ship ${id}`;
    this._health = 5000;
    this._maxHealth = this._health + 0;
    this._cannonNum = 20;
    this._rumStock = 3;
    this._sunk = false;
    this._recruitCrew(crewSize);
    console.log(`${this._id} on the seven seas with ${crewSize} seadogs!`);
  }

  public inspectCrew(): void {
    for (let i: number = 0; i < this._crew.length; i++) {
      console.log(this._crew[i]);
    }
  }

  public getCrewSize(): number {
    return this._crew.length;
  }

  public isDead() {
    return this._sunk;
  }

  public inspectShip(): void {
    console.log(`--------------\n${this._id}\n--------------\nCrew size: ${this._crew.length}\nHealth: ${this._health}\nCannons: ${this._cannonNum}\n--------------`);
  }

  public drinkRum(): void {
    if (this._rumStock > 0) {
      for (let i: number = 0; i < this._crew.length; i++) {
        this._crew[i].decideRum();
      }
      this._rumStock--;
    } else {
      console.log('ARRRRRRRRRRRRRRRRRRRGH!!! WE ARE OUT OF RUM MATEYS!');
    }
  }

  private _recruitCrew(num: number): void {
    let temp: number = this._crew.length;
    for (let i: number = 0 + temp; i < num + temp; i++) {
      if (this._crew.length === 0) {
        this._crew.push(new Captain(i, this._id));
      } else {
        this._crew.push(new Pirate(i, this._id));
      }
    }
  }

  public battle(target: Ship): void {
    if (this._health > 0 && this.getCrewSize() > 0) {
      if (this._cannonNum > 0) {
        if (this._health === this._maxHealth) {
          let temp: number = rndNum(Math.floor(this._cannonNum / 3), this._cannonNum);
          console.log(`${this._id} engaged ${target._id} with ${temp} cannons.`);
          target._fireAt(temp);
        } else {
          console.log(`${this._id} firing at ${target._id} with ${this._cannonNum} cannons.`);
          target._fireAt(this._cannonNum);
        }
      } else {
        target._board();
      }
      wait(100);
      target.battle(this);
    } 
  }

  private _modHealth(num: number): void {
    this._health += num;
    if (this._health <= 0) {
      this._health = 0;
      console.log(`${this._id} just sunk!`);
      this._sunk = true;
    } else if (this.getCrewSize() <= 0){
      console.log(`${this._id}'s crew perished!`);
      this._sunk = true;
    }
  }

  private _fireAt(cannonNum: number): void {
    let dmgCounter: number = 0,
        dstrdCannonCounter: number = 0,
        crewCasualtyCounter: number = 0,
        crewDamageCounter: number = 0;

    for (let i: number = 0; i < cannonNum; i++) {
      if (this._health > 0) {
        let cannonDmg: number = rndNum(10, 100);
        dmgCounter += cannonDmg;
        this._modHealth(-Math.abs(cannonDmg));
        if (rndNum(0, 100) < 15) {
          dstrdCannonCounter++;
          this._cannonNum--;
        }
        if (rndNum(0, 100) < 20) {
          let temp: number[] = [rndNum(1, 5),  rndNum(20, 50)];
          crewCasualtyCounter += temp[0];
          crewDamageCounter += temp[1];
          this._damageCrew(temp[0], temp[1]);
        }
      } else {
        break;
      }
    }
    console.log(`----------\n${this._id} Damage Report:\n   Damage suffered: ${dmgCounter}\n   Cannons destroyed: ${dstrdCannonCounter}\n   Crew: ${crewCasualtyCounter} men suffered ${crewDamageCounter} damage\n----------`);
  }

  private _damageCrew(numOfPirates: number, damage: number): void {
    for (let i: number = 0; i < numOfPirates; i++) {
      if (this.getCrewSize() > 0) {
        this._crew[rndNum(0, this.getCrewSize() - 1)].modHealth(-Math.abs(damage));
        this._crew = this._crew.filter(pirate => {
          return !pirate.isDead();
        })
      } else {
        break;
      }
    }
    //console.log(`${this._id}'s ${numOfPirates} crewmember(s) suffered ${damage} damage!`);
  }

  private _board() {
    console.log('Boarding not implemented yet!');
    this._modHealth(-1000);
  }
}

export { Ship };
