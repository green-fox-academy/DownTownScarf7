'use strict';

function rndNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Pirate {
  protected drunkness: number;
  protected atk: number;
  protected dfs: number;
  protected health: number;
  protected dead: boolean;
  protected id: string;

  constructor(id: number) {
    this.id = `Pirate ${id}`;
    this.drunkness = rndNum(0, 50);
    this.atk = rndNum(20, 30);
    this.dfs = rndNum(20, 30);
    this.health = 100;
    this.dead = false;
  }

  public decideRum(): void {
    if (rndNum(0, this.drunkness) < 50) {
      console.log(`Arrgh, ${this.id} is ${this.drunkness}% drunk! Pour me anudder!`);
      this._drinkRum();
    } else {
      console.log(`Arrgh, ${this.id} is ${this.drunkness}% drunk! That's 'nuff fo now!`);
    }
  }

  private _drinkRum(): void {
    this.drunkness += rndNum(10, 25);
    this.modHealth(5);
    this._checkDrunkness();
  }

  private _checkDrunkness(): void {
    if (this.drunkness < 20) {
      this.atk = rndNum(20, 30);
      this.dfs = rndNum(20, 30);
    } else if (this.drunkness >= 20 && this.drunkness < 40) {
      this.atk = rndNum(17, 33);
      this.dfs = rndNum(20, 30);
    } else if (this.drunkness >= 40 && this.drunkness < 60) {
      this.atk = rndNum(15, 25);
      this.dfs = rndNum(25, 30);
    } else if (this.drunkness >= 60 && this.drunkness < 80) {
      this.atk = rndNum(15, 20);
      this.dfs = rndNum(25, 30);
    } else if (this.drunkness >= 80 && this.drunkness < 95) {
      this.atk = rndNum(10, 20);
      this.dfs = rndNum(30, 40);
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
    this.modHealth(-10);
    console.log(`Blehh, I just lost ${temp}% drunkness!`);
    this._checkDrunkness();
  }

  public modHealth(num: number): void {
    this.health += num;
    if (this.health <= 0) {
      console.log(`Arrgh, ${this.id} died!`);
      this.dead = true;
    }
  }

  public modStats(num: number): void {
    this.atk += num;
    this.dfs += num;
  }
}

export { Pirate };
