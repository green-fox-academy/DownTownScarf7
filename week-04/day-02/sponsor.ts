'use strict';

import { Person } from './person';

class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;

  public constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  public hire(): void {
    this.hiredStudents++;
  }

  public getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }
}

export { Sponsor };
