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
    this.checkDrunkness();
  }

  public isDead(): boolean {
    return this.dead;
  }

  // To drink or not to drink
  public decideRum(): void {
    if (rndNum(0, this.drunkness) - (this.maxHealth - this.health) < 40) {
      this.drinkRum();
    }
  }

  private drinkRum(): void {
    let temp: number = rndNum(10, 25);
    this.drunkness += temp;
    this.modHealth(temp);
    this.checkDrunkness();
  }

  // Modifies stats according to drunkness
  private checkDrunkness(): void {
    if (this.drunkness < 20) {
      this.modStats(-2, -2);
    } else if (this.drunkness >= 20 && this.drunkness < 40) {
      this.modStats(-1, -1);
    } else if (this.drunkness >= 40 && this.drunkness < 60) {
      this.modStats(1, 1);
    } else if (this.drunkness >= 60 && this.drunkness < 80) {
      this.modStats(2, 2);
    } else if (this.drunkness >= 80 && this.drunkness < 95) {
      this.modStats(5, 5);
      if (rndNum(0, 100) > 50) {
        this.vomit();
      }
    } else {
      this.vomit();
    }
  }

  private vomit(): void {
    let temp: number = rndNum(20, 50);
    this.drunkness -= temp;
    this.modHealth(-20);
    this.checkDrunkness();
  }

  // Fights another pirate
  public fight(target: Pirate): void {
    if (this.health > 0) {
      if (target.dfs + 5 < this.atk) {
        target.modHealth(-Math.abs(this.atk - target.dfs));
        if (target.health > 0) {
          target.modStats(0, -1);
          target.fight(this);
        }
      } else {
        target.modHealth(-5);
        if (target.health > 0) {
          target.modStats(0, -2);
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
  private modStats(atk: number, dfs: number): void {
    this.atk += atk;
    this.dfs += dfs;
    if (this.atk < 5) {
      this.atk = 5;
    }
    if (this.dfs < 0) {
      this.dfs = 0;
    }
  }
}

export { Pirate };
