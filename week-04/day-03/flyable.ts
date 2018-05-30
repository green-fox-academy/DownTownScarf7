export { };
'use strict';

interface Flyable {
  land(): void,
  fly(): void,
  takeOff(): void,
};

abstract class Vehicle {
  protected weigth: number;
  protected speed: number;

  public getSpeed(): number {
    return this.speed;
  }

  public getWeigth(): number {
    return this.weigth;
  }

}

class Helicopter extends Vehicle implements Flyable {
  public constructor() {
    super();
    this.weigth = 50;
    this.speed = 200;
  }
  public land(): void {
    console.log('Landing');
  }

  public fly(): void {
    console.log('Flying');
  }

  public takeOff(): void {
    console.log('Taking off');
  }
}

function test() {
  let heli: Helicopter = new Helicopter();

  heli.takeOff();
  heli.fly();
  heli.land();
}

test();