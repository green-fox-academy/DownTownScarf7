import { Thing } from "./thing";

class Fleet {
  private things: Thing[];
  private check: string;

  constructor() {
    this.things = [];
  }
  add(thing: Thing, cpmlt?: boolean) {
    this.things.push(thing);
    if (cpmlt === true) {
      thing.complete();
    }
  }
  print() {
    for (let i: number = 0; i < this.things.length; i++) {
      if (this.things[i].getStatus()) {
        this.check = 'X';
      } else {
        this.check = ' ';
      }
      console.log(`${i + 1}. [${this.check}] ${this.things[i].getName()}`);
    }
  }
}

export { Fleet };
