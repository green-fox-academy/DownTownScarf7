'use strict';

class Aircraft {
  private type: string;
  private maxAmmo: number;
  private baseDamage: number;
  private ammo: number;

  public constructor(type: string) {
    this.type = type;
    this.ammo = 0;
    this.initAircraft();
  }

  private initAircraft(): void {
    if (this.type === 'F16') {
      this.maxAmmo = 8;
      this.baseDamage = 30;
    } else if (this.type === 'F35') {
      this.maxAmmo = 12;
      this.baseDamage = 50;
    } else {
      this.type = 'F16';
      this.initAircraft();
    }
  }

  public fight(target: Aircraft): number {
    console.log(`${this.type} dealt ${this.ammo * this.baseDamage} to ${target.type}`);
    this.ammo = 0;
    return this.ammo * this.baseDamage;
  }
}
