export { };
'use strict';

abstract class Instrument {
  protected name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument {
  constructor(numOfStrings = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numOfStrings;
  }

  public play(): void {
    console.log(this.sound());
  }

  public sound(): string {
    return 'Twang';
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numOfStrings = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numOfStrings;
  }

  public play(): void {
    console.log(this.sound());
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }
}

class Violin extends StringedInstrument {
  constructor(numOfStrings = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = numOfStrings;
  }

  public play(): void {
    console.log(this.sound());
  }

  public sound(): string {
    return 'Screech';
  }
}

function test() {
  console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
  let guitar = new ElectricGuitar();
  let bassGuitar = new BassGuitar();
  let violin = new Violin();

  console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();

  console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
  let guitar2 = new ElectricGuitar(7);
  let bassGuitar2 = new BassGuitar(5);

  console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();
}

test();
