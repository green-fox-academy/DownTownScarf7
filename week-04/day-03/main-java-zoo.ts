export { };
'use strict';

abstract class Animal {
  protected name: string;
  protected age: number;
  protected hunger: number;
  protected dead: boolean;
  protected type: string;
  abstract breed(): string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public isDead(): boolean {
    return this.dead;
  }

  public feed(num: number): void {
    this.hunger -= num;
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
    this.type = 'bird';
  }

  public breed(): string {
    return 'laying egg'
  }
}

class Reptile extends Animal {
  constructor(name: string) {
    super(name);
    this.type = 'reptile';
  }

  public breed(): string {
    return 'laying egg';
  }
}

class Mammal extends Animal {
  constructor(name: string) {
    super(name);
    this.type = 'mammal';
  }

  public breed(): string {
    return 'fuckin\'';
  }
}

function test() {
  let reptile = new Reptile("Crocodile");
  let mammal = new Mammal("Koala");
  let bird = new Bird("Parrot");

  console.log("How do you breed?");
  console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
  console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
  console.log("A " + bird.getName() + " is breeding by " + bird.breed());
}

test();
