'use strict';

import {Teacher} from './teacher';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Student {
  private IQ: number;

  constructor() {
    this.IQ = Math.floor(Math.random() * (200 - 50 + 1) + 50);
  }

  public learn(min, max): void {
    this.IQ += Math.floor(Math.random() * (max - min + 1) + min);
  }

  public question(teacher: Teacher): void {
    console.log('?');
    teacher.answer();
  }

  public getIQ(): string {
    if (this.IQ < 60) {
      return 'Retarded';
    } else if (this.IQ > 60 && this.IQ < 100) {
      return 'Nominal';
    } else if (this.IQ > 100 && this.IQ < 125) {
      return 'Normal';
    } else if (this.IQ > 125 && this.IQ < 150) {
      return 'Smart';
    } else {
      return 'Genius';
    }
  }
}

export{Student};
