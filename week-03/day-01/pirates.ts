'use strict';

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Pirate {
  private drunkness: number;
  private atk: number;
  private dfs: number;
  private health: number;
  private dead: boolean;

  constructor() {
    this.drunkness = rndNum(0, 50);
    this.atk = rndNum(20, 30);
    this.dfs = rndNum(20, 30);
    this.health = 100;
    this.dead = false;
  }

  private drinkSomeRum() {
    this.drunkness += rndNum(10, 25);
    this.health -= 1;
    this.checkDrunkness();
  }

  private vomit() {
    let temp: number = rndNum(20, 50);
    this.drunkness -= temp;
    this.health -= 5;
    console.log(`Blehh, I just lost ${temp}% drunkness!`);
    this.checkDrunkness();
  }

  public howsItGoinMatey() {
    if (rndNum(0, this.drunkness) < 50) {
      console.log(`Arrgh, I'm only ${this.drunkness}% drunk! Pour me anudder!`);
      this.drinkSomeRum();
    } else {
      console.log(`Arrgh, I'm ${this.drunkness}% drunk! Imma pirate, whaddaya think how I'm doin'?`);
    }
  }

  private checkHealth() {
    if (this.health <= 0) {
      this.dead = true;
    }
  }

  private checkDrunkness() {
    if (this.drunkness < 20) {
      this.atk = rndNum(20, 30);
      this.dfs = rndNum(20, 30);
    } else if (this.drunkness > 20 && this.drunkness < 40) {
      this.atk = rndNum(15, 25);
      this.dfs = rndNum(25, 35);
    } else if (this.drunkness > 40 && this.drunkness < 60) {
      this.atk = rndNum(10, 25);
      this.dfs = rndNum(30, 35);
    } else if (this.drunkness > 60 && this.drunkness < 80) {
      this.atk = rndNum(10, 20);
      this.dfs = rndNum(30, 40);
    } else if (this.drunkness > 95) {
      this.vomit();
    } else {
      this.atk = rndNum(5, 10);
      this.dfs = rndNum(40, 50);
      if (rndNum(0, 100) > 50) {
        this.vomit();
      }
    }
  }
}

export { Pirate };
