'use strict';

import {Student} from './student';

class Teacher {
  public teach(student: Student): void {
    student.learn(5, 50);
  }
  public answer(): void{
    console.log('!');
  }
}

export {Teacher};
