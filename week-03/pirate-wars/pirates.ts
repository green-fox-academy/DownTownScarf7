'use strict';

// RNG
function rndNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Pirate {
  protected drunkness: number;
  protected atk: number;
  protected dfs: number;
  protected health: number;
  protected maxHealth: number;
  protected dead: boolean;
  protected id: string;

  constructor(id: number, idShip: string) {
    this.id = `Pirate ${id} of ${idShip}`;
    this.drunkness = rndNum(0, 50);
    this.atk = rndNum(5, 30);
    this.dfs = rndNum(5, 20);
    this.health = 100;
    this.maxHealth = this.health + 0;
    this.dead = false;
    this._checkDrunkness();
  }

  public isDead(): boolean {
    return this.dead;
  }

  // To drink or not to drink
  public decideRum(): void {
    if (rndNum(0, this.drunkness) - (this.maxHealth - this.health) < 40) {
      console.log(`Arrgh, ${this.id} is ${this.drunkness}% drunk! Pour me anudder!`);
      this._drinkRum();
    } else {
      console.log(`Arrgh, ${this.id} is ${this.drunkness}% drunk! That's 'nuff fo now!`);
    }
  }

  private _drinkRum(): void {
    let temp: number = rndNum(10, 25);
    this.drunkness += temp;
    this.modHealth(temp);
    this._checkDrunkness();
  }

  // Modifies stats according to drunkness
  private _checkDrunkness(): void {
    if (this.drunkness < 20) {
      this._modStats(-2, -2);
    } else if (this.drunkness >= 20 && this.drunkness < 40) {
      this._modStats(-1, -1);
    } else if (this.drunkness >= 40 && this.drunkness < 60) {
      this._modStats(1, 1);
    } else if (this.drunkness >= 60 && this.drunkness < 80) {
      this._modStats(2, 2);
    } else if (this.drunkness >= 80 && this.drunkness < 95) {
      this._modStats(5, 5);
      if (rndNum(0, 100) > 50) {
        this._vomit();
      }
    } else {
      this._vomit();
    }
  }

  private _vomit(): void {
    let temp: number = rndNum(20, 50);
    this.drunkness -= temp;
    this.modHealth(-20);
    console.log(`Blehh, ${this.id} just lost ${temp}% drunkness!`);
    this._checkDrunkness();
  }

  //Fights another pirate
  public fight(target: Pirate): void {
    if (this.health > 0) {
      if (target.dfs + 5 < this.atk) {
        console.log(`${this.id} deals ${this.atk - target.dfs} damage to ${target.id}`);
        target.modHealth(-Math.abs(this.atk - target.dfs));
        if (target.health > 0) {
          target._modStats(0, -1);
          target.fight(this);
        }
      } else {
        target.modHealth(-5);
        console.log(`${this.id} deals 5 damage to ${target.id}`);
        if (target.health > 0) {
          target._modStats(0, -2);
          target.fight(this);
        }
      }
    }
  }

  // Modifies health and checks if pirate is dead
  public modHealth(num: number): void {
    this.health += num;
    if (this.health <= 0) {
      this.health = 0;
      console.log(`Arrgh, ${this.id} died!`);
      this.dead = true;
    }
  }

  // Modifies stats
  private _modStats(atk: number, dfs: number): void {
    this.atk += atk;
    this.dfs += dfs;
    if (this.atk < 5) {
      this.atk = 5;
    }
    if (this.dfs < 0) {
      this.dfs = 0;
    }
    console.log(`${this.id} now has ${this.atk} atk and ${this.dfs} dfs`);
  }
}

export { Pirate };
