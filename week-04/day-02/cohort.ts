'use strict';

import { Student } from './student';
import { Mentor } from './mentor';

class Cohort {
  protected name: string;
  protected students: Student[];
  protected mentors: Mentor[];

  public constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  public info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

export { Cohort };
