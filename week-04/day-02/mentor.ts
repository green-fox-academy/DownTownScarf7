'use strict';

import { Person } from './person';

class Mentor extends Person {
  protected level: string;

  public constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  public getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

export { Mentor };
