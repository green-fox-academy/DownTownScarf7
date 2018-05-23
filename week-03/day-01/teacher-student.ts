'use strict';

import {Teacher} from './teacher';
import {Student} from './student';

let jhonny: Student = new Student();
let maria: Teacher = new Teacher();

console.log(jhonny.getIQ());
maria.teach(jhonny);
maria.teach(jhonny);
console.log(jhonny.getIQ());
jhonny.question(maria);
