'use strict';

import { Person } from './person'

class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;

  public constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  public getGoal(): void {
    console.log('Be a junior software developer');
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  public skipDays(numberofDays): void {
    this.skippedDays += numberofDays;
  }
}

export { Student };
